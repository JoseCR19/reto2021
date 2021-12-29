const AWS = require("aws-sdk");
const getPelicula = async(event)=>{
    const dynamodb = new AWS.DynamoDB.DocumentClient();
    const id= event;
    const result = await dynamodb.get({
        TableName: "Pelicula",
        Key: {
            id
        }
    }).promise();
    if(JSON.stringify(result) === '{}'){
        const pelicula="";
        console.info("no se encuentra");
        return pelicula;
    }else{
        console.info("hay datos");
        const pelicula = result.Item;
        return pelicula
    }
};  
module.exports ={
    getPelicula,
}