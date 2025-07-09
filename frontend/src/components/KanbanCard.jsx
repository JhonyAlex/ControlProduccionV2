import React from 'react'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { PedidoProduccion } from '../types/PedidoProduccion'

/**
 * Tarjeta individual que muestra los datos de un pedido.
 *
 * @param {{ pedido: PedidoProduccion }} props - Pedido a representar.
 * @returns {JSX.Element} Tarjeta con información del pedido.
 */
function KanbanCard({ pedido }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: pedido.id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
    cursor: 'grab',
  }

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={style}
      className="bg-white rounded-lg shadow p-2 border"
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
