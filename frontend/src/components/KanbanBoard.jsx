import React, { useState } from 'react'
import KanbanColumn from './KanbanColumn'
import { DndContext } from '@dnd-kit/core'
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
    if (active && over && active.id !== over.id) {
      setPedidosData((prev) =>
        prev.map((pedido) =>
          pedido.id === active.id ? { ...pedido, etapaActual: over.id } : pedido
        )
      )
    }
  }

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="flex gap-4 overflow-x-auto p-4">
        {etapas.map((etapa) => (
          <KanbanColumn
            key={etapa}
            etapa={etapa}
            pedidos={pedidosData.filter((p) => p.etapaActual === etapa)}
          />
        ))}
      </div>
    </DndContext>
  )
}

export default KanbanBoard
