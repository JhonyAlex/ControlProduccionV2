const request = require('supertest');
const fs = require('fs');
const path = require('path');
let app;

beforeAll(() => {
  const distDir = path.join(__dirname, '..', 'frontend', 'dist');
  fs.mkdirSync(distDir, { recursive: true });
  fs.writeFileSync(
    path.join(distDir, 'index.html'),
    '<!doctype html><html><body>Prueba</body></html>'
  );
  app = require('../index');
});

afterAll(() => {
  const distDir = path.join(__dirname, '..', 'frontend', 'dist');
  fs.rmSync(distDir, { recursive: true, force: true });
});

describe('Rutas del servidor', () => {
  test('GET / devuelve el index del frontend', async () => {
    const respuesta = await request(app).get('/');
    expect(respuesta.statusCode).toBe(200);
    expect(respuesta.text).toContain('<!doctype html>');
  });
});
