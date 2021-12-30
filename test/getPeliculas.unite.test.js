import * as peliculas from '../src/Peliculas/getPeliculas';
test('getPeliculas', async () => {
    const event = 'event';
    const context = 'context';
    const callback = (error, response) => {
      expect(response.statusCode).toEqual(200);
      expect(typeof response.body.data.Items).toBe(Object);
    };
    await peliculas.getPeliculas(event, context, callback);
});
