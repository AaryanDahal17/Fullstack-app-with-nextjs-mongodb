import {MongoClient} from 'mongodb'
const {db_connect} = require('../../../config.json')

const url = process.env.DATABASE_CONNECT || db_connect

const options = { useNewUrlParser: true, useUnifiedTopology: true };

const client = new MongoClient(url, options);

client.connect();

function getClient(){
    return client;
}


export default getClient
