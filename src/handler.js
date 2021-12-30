const utils = require('./utils/utils');
const Responses = require('../src/utils/reponse');
module.exports.obtenerDatos = async (event, context, callback) => {
  const nombre =`${event.pathParameters.name}`;
  const id = `${event.pathParameters.id}`;
  const body  = await utils.listorcreate(nombre,id);
  if(body==null){
    return Responses._204({message:'No hay registros'});
  }
  return Responses._200({body});
};