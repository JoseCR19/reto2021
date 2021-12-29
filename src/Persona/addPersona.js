const {v4} = require('uuid');
const AWS = require('aws-sdk');
const addPersona = async(event)=>{
    const dynamodb = new AWS.DynamoDB.DocumentClient();
    
    const {id, nombre,altura, peso, color_cabello,color_piel,color_ojos,fecha_cumpleaños,genero,pais_natal, peliculas,especies,vehículos,naves_esterales,creado,editado,url} = event;
    const createdAt = new Date();
    const personaModel = {
        id,nombre,altura, peso, color_cabello,color_piel,color_ojos,fecha_cumpleaños,genero,pais_natal, peliculas,especies,vehículos,naves_esterales,creado,editado,url,createdAt,
    };
    await dynamodb.put({
        TableName: 'Personas',
        Item: personaModel
    }).promise()
};
const addPersonaPost= async(event)=>{
    const dynamodb = new AWS.DynamoDB.DocumentClient();
    const {nombre,altura, peso, color_cabello,color_piel,color_ojos,fecha_cumpleaños,genero,pais_natal, peliculas,especies,vehículos,naves_esterales,creado,editado,url} = JSON.parse(event.body);
    const createdAt = new Date();
    const id = v4();
    const personaModel = {
        id,nombre,altura, peso, color_cabello,color_piel,color_ojos,fecha_cumpleaños,genero,pais_natal, peliculas,especies,vehículos,naves_esterales,creado,editado,url,createdAt,
    };
    await dynamodb.put({
        TableName: 'Personas',
        Item: personaModel
    }).promise()
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
            body : personaModel,
          },
          null,
          2
        ),
      };
};
module.exports ={
    addPersona,
    addPersonaPost
};
