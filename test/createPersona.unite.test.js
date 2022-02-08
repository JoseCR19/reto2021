import * as persona from '../src/servicios/Persona/addPersona';

test('addPersonaPost', async () => {
  const event = { 
      body: '{"nombre": "Beru Whitesun lars","altura": "165","peso": "75","color_cabello": "brown","color_piel": "light","color_ojos": "blue","fecha_cumpleaños": "47BBY","genero": "female","pais_natal": "https://swapi.py4e.com/api/planets/1/","peliculas": ["https://swapi.py4e.com/api/films/1/","https://swapi.py4e.com/api/films/5/", "https://swapi.py4e.com/api/films/6/"],"especies": [ "https://swapi.py4e.com/api/species/1/"],"vehículos": [],"naves_esterales": [],"creado": "2014-12-10T15:53:41.121000Z","editado": "2014-12-20T21:17:50.319000Z","url": "https://swapi.py4e.com/api/people/7/","created": "2021-12-30T07:25:48.647Z"}',
    }
  
  const context = 'context';
  
  const callback = (error, response) => {
    expect(response.statusCode).toEqual(200);
  };
  
  await persona.addPersonaPost(event, context, callback);
});
