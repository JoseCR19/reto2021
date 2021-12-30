const {v4} = require('uuid');
const Dynamo = require('../utils/dynamoDbConfig');
const Responses = require('../utils/reponse');
exports.addPelicula = async( event ) => {
    const {id, titulo,episodio_id, descripcion, director,productor,fecha_lanzamiento,creado,editado,url, vehiculos,especies,naves_espaciales,planetas,caracteres} = event;
    const fecha_creacion = new Date();
    const body = {
        id, titulo,episodio_id, descripcion, director,productor,fecha_lanzamiento,creado,editado,url, vehiculos,especies,naves_espaciales,planetas,caracteres,fecha_creacion
    };
    const pelicula = await Dynamo.create(body,process.env.tableNamePelicula).catch(err=>{
        return null;
    });
    return pelicula;
};
exports.addPeliculaPost = async( event ) => {
    const {titulo,episodio_id, descripcion, director,productor,fecha_lanzamiento,creado,editado,url, vehiculos,especies,naves_espaciales,planetas,caracteres} = JSON.parse(event.body);
    const fecha_creacion = new Date();
    const id = v4();
    const body = {
        id, titulo,episodio_id, descripcion, director,productor,fecha_lanzamiento,creado,editado,url, vehiculos,especies,naves_espaciales,planetas,caracteres,fecha_creacion
    };
    const result = await Dynamo.create(body,process.env.tableNamePelicula).catch(err=>{
        return null;
    });
    if (!result){
        return Responses._400({ message: 'No se pudo regsitraer' });
    }
    return Responses._200({ body });
};
