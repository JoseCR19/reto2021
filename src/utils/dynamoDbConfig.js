const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();
const Dynamo = {
    async get(id,TableName){
        const params = {
            TableName,
            Key:{
                id,
            },
        }
        const data = await dynamodb.get(params).promise();
        if(!data || !data.Item){
            throw Error(`Hubo un error al obtener los datos para el ID : ${ID} de la tabla `)
        }
        return data.Item;
    },
    async getAll(TableName){
        const params ={
            TableName
        }
        const data = await dynamodb.scan(params).promise();
        if(!data || !data.Items){
            throw Error(`Hubo un error al obtener los datos de la tabla`)
        }
        return data.Items;
    },
    async create(data, TableName) {
        const params = {
            TableName,
            Item: data,
        };
        const res = await dynamodb.put(params).promise();
        if (!res) {
            throw Error(`Hubo un error al crear los datos en la table`);
        }
        return res;
    },
};
module.exports = Dynamo;