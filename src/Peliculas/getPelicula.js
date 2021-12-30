const Dynamo = require('../utils/dynamoDbConfig');
const Responses = require('../utils/reponse');
exports.getPelicula = async(event)=>{
    try{
        if(!event){
            return Responses._400({ message: 'Se requiere el ID' });
        }
        const id = event;
        const result = await Dynamo.get(id, process.env.tableNamePelicula);
        return result;
    }catch(error){
        return null;
    }
};