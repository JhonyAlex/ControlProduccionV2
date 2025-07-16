import React from 'react'
import { useDraggable } from '@dnd-kit/core'
import { CSS } from '@dnd-kit/utilities'
import { PedidoProduccion } from '../types/PedidoProduccion'

/**
 * Tarjeta individual que muestra los datos de un pedido.
 *
 * @param {{ pedido: PedidoProduccion }} props - Pedido a representar.
 * @returns {JSX.Element} Tarjeta con información del pedido.
 */
function KanbanCard({ pedido }) {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({ id: pedido.id })

  const style = {
    transform: CSS.Translate.toString(transform),
    opacity: isDragging ? 0.5 : 1,
  }

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={style}
      className="kanban-card"
    >
      <div className="font-semibold">{pedido.numeroPedido}</div>
      <div className="text-xs text-gray-600">{pedido.cliente}</div>
      <div className="text-xs">
        Impresión: <b>{pedido.tipoImpresion}</b>
      </div>
    </div>
  )
}

export default KanbanCard
