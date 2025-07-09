// 1. Cargar variables de entorno desde el archivo .env
require('dotenv').config();

// 2. Importar la librería Express
const express = require('express');

// 3. Crear una instancia de la aplicación Express
const app = express();

// 4. Definir el puerto
// Heroku te asignará un puerto dinámicamente a través de una variable de entorno llamada PORT.
// Si no existe (porque estás en tu máquina local), usará el puerto 3000.
const PORT = process.env.PORT || 3000;

// 5. Crear la ruta principal (endpoint)
// Esto responde a las peticiones GET en la raíz de tu sitio (ej: https://mi-app.herokuapp.com/)
app.get('/', (req, res) => {
  res.send('¡Hola, Mundo desde Heroku!');
});

// 6. Exportar la aplicación para facilitar las pruebas
module.exports = app;

// 7. Si el archivo se ejecuta directamente, iniciar el servidor
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
  });
}
