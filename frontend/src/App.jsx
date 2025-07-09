import React from 'react'
import KanbanBoard from './components/KanbanBoard'

/**
 * Componente principal de la aplicación.
 */
function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="p-4 border-b text-xl font-bold">
        Control de Producción
      </header>
      <KanbanBoard />
    </div>
  )
}

export default App
