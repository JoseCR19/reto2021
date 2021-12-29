const {v4} = require('uuid');
const AWS = require('aws-sdk');
const addPelicula = async(event)=>{
    const dynamodb = new AWS.DynamoDB.DocumentClient();
    
    const {id, titulo,episodio_id, descripcion, director,productor,fecha_lanzamiento,creado,editado,url, vehiculos,especies,naves_espaciales,planetas,caracteres} = event;
    const fecha_creacion = new Date();
    const peliculaModel = {
        id, titulo,episodio_id, descripcion, director,productor,fecha_lanzamiento,creado,editado,url, vehiculos,especies,naves_espaciales,planetas,caracteres,fecha_creacion
    };
    await dynamodb.put({
        TableName: 'Pelicula',
        Item: peliculaModel
    }).promise()
};
const addPeliculaPost= async(event)=>{
    const dynamodb = new AWS.DynamoDB.DocumentClient();
    const {titulo,episodio_id, descripcion, director,productor,fecha_lanzamiento,creado,editado,url, vehiculos,especies,naves_espaciales,planetas,caracteres} = JSON.parse(event.body);
    const fecha_creacion = new Date();
    const id = v4();
    const peliculaModel = {
        id, titulo,episodio_id, descripcion, director,productor,fecha_lanzamiento,creado,editado,url, vehiculos,especies,naves_espaciales,planetas,caracteres,fecha_creacion
    };
    await dynamodb.put({
        TableName: 'Pelicula',
        Item: peliculaModel
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
            body : peliculaModel,
          },
          null,
          2
        ),
      };
};
module.exports ={
    addPelicula,
    addPeliculaPost
};
