import React from 'react'
import { PedidoProduccion } from '../types/PedidoProduccion'

/**
 * Tarjeta individual que muestra los datos de un pedido.
 *
 * @param {{ pedido: PedidoProduccion }} props - Pedido a representar.
 * @returns {JSX.Element} Tarjeta con información del pedido.
 */
function KanbanCard({ pedido }) {
  return (
    <div className="bg-white rounded-lg shadow p-2 border">
      <div className="font-semibold">{pedido.numeroPedido}</div>
      <div className="text-xs text-gray-600">{pedido.cliente}</div>
      <div className="text-xs">
        Impresión: <b>{pedido.tipoImpresion}</b>
      </div>
    </div>
  )
}

export default KanbanCard
