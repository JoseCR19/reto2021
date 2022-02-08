const Dynamo = require('../../servicios_externos/dynamoDbConfig');
const Responses = require('../../servicios_externos/reponse');

exports.getPersonas = async ( event,context,callback ) => {

    const body = await Dynamo.getAll(process.env.tableNamePersona).catch(err =>{
        return null;
    });
    
    if(!body)
        return Responses._204({message:'No hay registros para la tabla: Persona'});
    return Responses._200({body});
};