// 1. Importar la librería Express
const express = require('express');

// 2. Crear una instancia de la aplicación Express
const app = express();

// 3. Definir el puerto
// Heroku te asignará un puerto dinámicamente a través de una variable de entorno llamada PORT.
// Si no existe (porque estás en tu máquina local), usará el puerto 3000.
const PORT = process.env.PORT || 3000;

// 4. Crear la ruta principal (endpoint)
// Esto responde a las peticiones GET en la raíz de tu sitio (ej: https://mi-app.herokuapp.com/)
app.get('/', (req, res) => {
  res.send('¡Hola, Mundo desde Heroku!');
});

// 5. Iniciar el servidor y ponerlo a escuchar en el puerto definido
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
