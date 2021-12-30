const AWS = require("aws-sdk");
const getPersonas = async (event) =>{
    const dynamodb = new AWS.DynamoDB.DocumentClient();
    try{
        const result = await dynamodb.scan({
            TableName: "Personas"
        })
        .promise();
        const Personas = result.Items;
        return {
            statusCode:200,
            headers: {
                "Access-Control-Allow-Origin": "*",
                // "Access-Control-Allow-Credentials": true,
                'Access-Control-Allow-Headers': 'X-PINGOTHER, Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, X-Amz-Date, X-Api-Key, X-Amz-Security-Token',
                'Access-Control-Allow-Methods': 'POST, PUT, GET, OPTIONS'
              },
            body:JSON.stringify({
                body:Personas
            }) 
        };
    }catch(error){
        console.error(error);
        const errores = "error:" + error;
        return {errores}
    }
};
module.exports = {
    getPersonas
}