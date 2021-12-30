const Dynamo = require('../utils/dynamoDbConfig');
const Responses = require('../utils/reponse');
exports.getPersonas = async ( event,context,callback ) => {
    const body = await Dynamo.getAll(process.env.tableNamePersona).catch(err =>{
        return null;
    });
    if(!body)
        return Responses._204({message:'No hay registros para la tabla: Persona'});
    return Responses._200({body});
};