import React from 'react'
import KanbanCard from './KanbanCard'

/**
 * Representa una columna del tablero Kanban.
 * Solo muestra un título y un ejemplo de tarjeta.
 */
function KanbanColumn() {
  return (
    <div className="bg-gray-100 rounded p-2 w-60">
      <h2 className="font-bold mb-2">Columna</h2>
      <KanbanCard />
    </div>
  )
}

export default KanbanColumn
