const {v4} = require('uuid');
const Dynamo = require('../utils/dynamoDbConfig');
const Responses = require('../utils/reponse');
const addPelicula = async( event ) => {
    const {id, titulo,episodio_id, descripcion, director,productor,fecha_lanzamiento,creado,editado,url, vehiculos,especies,naves_espaciales,planetas,caracteres} = event;
    const fecha_creacion = new Date();
    const peliculaModel = {
        id, titulo,episodio_id, descripcion, director,productor,fecha_lanzamiento,creado,editado,url, vehiculos,especies,naves_espaciales,planetas,caracteres,fecha_creacion
    };
    Dynamo.create(peliculaModel,process.env.tableNamePelicula);
};
const addPeliculaPost = async( event ) => {
    const {titulo,episodio_id, descripcion, director,productor,fecha_lanzamiento,creado,editado,url, vehiculos,especies,naves_espaciales,planetas,caracteres} = JSON.parse(event.body);
    const fecha_creacion = new Date();
    const id = v4();
    const peliculaModel = {
        id, titulo,episodio_id, descripcion, director,productor,fecha_lanzamiento,creado,editado,url, vehiculos,especies,naves_espaciales,planetas,caracteres,fecha_creacion
    };
    const persona = await Dynamo.create(peliculaModel,process.env.tableNamePelicula).catch(err=>{
        return null;
    });
    if (!persona)
        return Responses._400({ message: 'No se pudo regsitraer' });
    return Responses._200({ persona });
};
module.exports ={
    addPelicula,
    addPeliculaPost
};
