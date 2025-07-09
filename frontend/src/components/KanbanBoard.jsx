import React from 'react'
import KanbanColumn from './KanbanColumn'

/**
 * Tablero principal del sistema Kanban.
 * Por ahora es un contenedor sin lógica de negocio.
 */
function KanbanBoard() {
  return (
    <div className="flex space-x-4 p-4">
      {/* Aquí se renderizarán las columnas del tablero */}
      <KanbanColumn />
      <KanbanColumn />
    </div>
  )
}

export default KanbanBoard
