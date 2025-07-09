# ControlProduccionV2

Este repositorio contiene un ejemplo sencillo de servidor Express y un proyecto de frontend basado en React.

- `index.js`: servidor Express de ejemplo.
- `frontend/`: aplicación React con TailwindCSS y una estructura mínima de tablero Kanban.

## Uso rápido

1. Instala las dependencias del servidor:
   ```bash
   npm install
   ```
2. Instala las dependencias del frontend:
   ```bash
   cd frontend && npm install
   ```
3. Para ejecutar el servidor de desarrollo del frontend:
   ```bash
   npm run dev
   ```
4. Para compilar el frontend para producción:
   ```bash
   npm run build
   ```
5. Para iniciar el servidor Express:
   ```bash
   cd ..
   npm start
   ```

## Pruebas

Para ejecutar las pruebas unitarias:

```bash
npm test
```

Este comando ejecuta Jest y verifica que la ruta principal responda con el texto de bienvenida.

Consulta `frontend/README.md` para más detalles sobre la aplicación React.
