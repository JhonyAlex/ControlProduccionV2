import React, { useState } from 'react'
import KanbanColumn from './KanbanColumn'
import { DndContext, closestCorners } from '@dnd-kit/core'
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from '@dnd-kit/sortable'
import { pedidosMock } from '../mocks/pedidosMock'
import { PedidoProduccion } from '../types/PedidoProduccion'

/**
 * Tablero principal del sistema Kanban.
 * Organiza las columnas según la etapa actual de cada pedido.
 * @param {{ pedidos?: PedidoProduccion[] }} props - Pedidos opcionales a utilizar.
 * @returns {JSX.Element} Tablero Kanban completo.
 */
function KanbanBoard({ pedidos }) {
  const [pedidosData, setPedidosData] = useState(pedidos || pedidosMock)

  const etapas = Array.from(
    new Set(pedidosData.flatMap((p) => p.etapasSecuencia))
  )

  const handleDragEnd = (event) => {
    const { active, over } = event
    if (!over) return

    const activePedido = pedidosData.find((p) => p.id === active.id)
    const overPedido = pedidosData.find((p) => p.id === over.id)

    if (!activePedido || !overPedido) return

    if (activePedido.etapaActual !== overPedido.etapaActual) {
      setPedidosData((prev) =>
        prev.map((p) =>
          p.id === activePedido.id
            ? { ...p, etapaActual: overPedido.etapaActual }
            : p
        )
      )
    } else {
      const etapa = activePedido.etapaActual
      const pedidosColumna = pedidosData.filter((p) => p.etapaActual === etapa)
      const oldIndex = pedidosColumna.findIndex((p) => p.id === active.id)
      const newIndex = pedidosColumna.findIndex((p) => p.id === over.id)
      const nuevosPedidosColumna = arrayMove(pedidosColumna, oldIndex, newIndex)
      const otrosPedidos = pedidosData.filter((p) => p.etapaActual !== etapa)
      setPedidosData([...otrosPedidos, ...nuevosPedidosColumna])
    }
  }

  return (
    <DndContext collisionDetection={closestCorners} onDragEnd={handleDragEnd}>
      <div className="flex gap-4 overflow-x-auto p-4">
        {etapas.map((etapa) => {
          const pedidosEtapa = pedidosData.filter((p) => p.etapaActual === etapa)
          return (
            <SortableContext
              key={etapa}
              id={etapa}
              items={pedidosEtapa.map((p) => p.id)}
              strategy={verticalListSortingStrategy}
            >
              <KanbanColumn etapa={etapa} pedidos={pedidosEtapa} />
            </SortableContext>
          )
        })}
      </div>
    </DndContext>
  )
}

export default KanbanBoard
