const Dynamo = require('../../servicios_externos/dynamoDbConfig');
const Responses = require('../../servicios_externos/reponse');

exports.getPeliculas =  async ( event,context,callback ) => {
    const body = await Dynamo.getAll(process.env.tableNamePelicula).catch(err =>{
        return null;
    });

    if(!body)
        return Responses._204({message:'No hay registros para la tabla: Pelicula'});
        
    return Responses._200({body});
};