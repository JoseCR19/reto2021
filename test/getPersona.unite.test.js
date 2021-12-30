import * as handler from '../src/handler';
test('obtenerDatos', async () => {
  const pathParameters = { pathParameters: { name: 'people', id: '1' }};
  const context = 'context';
  
  const callback = (error, response) => {
    expect(response.statusCode).toEqual(200);
    expect(typeof response.body.data).toBe(Object);
    expect(response.data.id).toEqual("5");
  };

  await handler.obtenerDatos(pathParameters, context, callback);
});