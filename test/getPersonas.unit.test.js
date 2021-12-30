import * as personas from '../src/Persona/getPersonas';
test('getPersonas', async () => {
    const event = 'event';
    const context = 'context';
    const callback = (error, response) => {
      expect(response.statusCode).toEqual(200);
      expect(typeof response.body.data.Items).toBe(Object);
    };
    await personas.getPersonas(event, context, callback);
});
