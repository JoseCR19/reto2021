import * as pelicula from '../src/Peliculas/addPelicula';
test('addPersonaPost', async () => {
  const event = { 
      body: '{"titulo": "Una muerte sin recuerdo","episodio_id": 1,"descripcion": "....","director": "George Lucas","productor": "Rick McCallum","fecha_lanzamiento": "1999-05-19", "creado": "2014-12-19T16:52:55.740000Z","editado": "2014-12-20T10:54:07.216000Z","especies": [ "https://swapi.py4e.com/api/species/1/"],"vehiculos": ["https://swapi.py4e.com/api/vehicles/33/"],"naves_espaciales": ["https://swapi.py4e.com/api/starships/31/"], "planetas": ["https://swapi.py4e.com/api/planets/1/"], "caracteres": ["https://swapi.py4e.com/api/people/2/"],"url": "https://swapi.py4e.com/api/films/4/"}'
      
    }
  const context = 'context';
  
  const callback = (error, response) => {
    expect(response.statusCode).toEqual(200);
  };
  await pelicula.addPeliculaPost(event, context, callback);
});
