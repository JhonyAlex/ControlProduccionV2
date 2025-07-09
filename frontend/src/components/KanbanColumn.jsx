import React from 'react'
import KanbanCard from './KanbanCard'
import { PedidoProduccion } from '../types/PedidoProduccion'

/**
 * Representa una columna del tablero Kanban.
 *
 * @param {{ etapa: string; pedidos: PedidoProduccion[] }} props - Etapa y pedidos asociados.
 * @returns {JSX.Element} Columna con las tarjetas correspondientes.
 */
function KanbanColumn({ etapa, pedidos }) {
  // Esta columna se gestiona como contexto ordenable desde KanbanBoard
  return (
    <div className="bg-gray-100 rounded-xl p-3 min-w-[260px] shadow-md flex-1">
      <h2 className="text-lg font-bold mb-2">{etapa}</h2>
      <div className="flex flex-col gap-2">
        {pedidos.map((pedido) => (
          <KanbanCard key={pedido.id} pedido={pedido} />
        ))}
      </div>
    </div>
  )
}

export default KanbanColumn
