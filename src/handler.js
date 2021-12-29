'use strict';
const utils = require('./utils/utils')
module.exports.obtenerDatos = async (event) => {
  const nombre =`${event.pathParameters.name}`;
  const id = `${event.pathParameters.id}`
  const responsePersonas  = await utils.listorcreate(nombre,id);
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      // "Access-Control-Allow-Credentials": true,
      'Access-Control-Allow-Headers': 'X-PINGOTHER, Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, X-Amz-Date, X-Api-Key, X-Amz-Security-Token',
      'Access-Control-Allow-Methods': 'POST, PUT, GET, OPTIONS'
    },
    body: JSON.stringify(
      {
        body : responsePersonas
      }
    ),
  };
};