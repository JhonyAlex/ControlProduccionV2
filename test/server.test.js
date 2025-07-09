const request = require('supertest');
const app = require('../index');

describe('Rutas del servidor', () => {
  test('GET / responde con texto de bienvenida', async () => {
    const respuesta = await request(app).get('/');
    expect(respuesta.statusCode).toBe(200);
    expect(respuesta.text).toBe('¡Hola, Mundo desde Heroku!');
  });
});
