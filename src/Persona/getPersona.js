const Dynamo = require('../utils/dynamoDbConfig');
const Responses = require('../utils/reponse');
exports.getPersona = async(event)=>{
    try{
        if (!event)
        return Responses._400({ message: 'Se requiere el ID' });
        const id= event;
        const result = await Dynamo.get(id, process.env.tableNamePersona);
    return result;
    }catch(error){
        return null;
    }
};