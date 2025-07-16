import React from 'react'
import KanbanBoard from './components/KanbanBoard'

/**
 * Componente principal de la aplicación.
 */
function App() {
  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: 'var(--color-background)',
        color: 'var(--color-foreground)',
      }}
    >
      <header
        className="p-4 border-b text-xl font-bold"
        style={{ borderColor: 'var(--color-border)' }}
      >
        Control de Producción
      </header>
      <KanbanBoard />
    </div>
  )
}

export default App
