const AWS = require("aws-sdk");
const getPersona = async(event)=>{
    const dynamodb = new AWS.DynamoDB.DocumentClient();
    const id= event;
    const result = await dynamodb.get({
        TableName: "Personas",
        Key: {
            id
        }
    }).promise();
    if(JSON.stringify(result) === '{}'){
        const persona="";
        console.log("no se encuentra");
        return persona;
    }else{
        console.log("hay datos");
        const persona = result.Item;
        return persona
    }
};  
module.exports ={
    getPersona,
}