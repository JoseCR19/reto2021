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
            return null;
        }
        return data.Item;
    },

    async getAll(TableName){
        const params ={
            TableName
        }

        const data = await dynamodb.scan(params).promise();
        
        if(!data || !data.Items){
            return null;
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
            return null;
        }
        return res;
    },

};

module.exports = Dynamo;