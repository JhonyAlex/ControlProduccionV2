// 1. Cargar variables de entorno desde el archivo .env
require('dotenv').config();

// 2. Importar la librería Express
const express = require('express');
// Importar utilidades para manejar rutas de archivos
const path = require('path');

// 3. Crear una instancia de la aplicación Express
const app = express();

// 4. Servir archivos estáticos generados por el frontend
app.use(express.static(path.join(__dirname, 'frontend', 'dist')));

// 5. Redirigir cualquier ruta que no sea API al index.html del frontend
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'dist', 'index.html'));
});

// 6. Definir el puerto
// Heroku te asignará un puerto dinámicamente a través de una variable de entorno llamada PORT.
// Si no existe (porque estás en tu máquina local), usará el puerto 3000.
const PORT = process.env.PORT || 3000;


// 7. Exportar la aplicación para facilitar las pruebas
module.exports = app;

// 8. Si el archivo se ejecuta directamente, iniciar el servidor
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
  });
}
