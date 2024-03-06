import {MongoClient} from 'mongodb'
const {dbUrl} = require('../../../config.json')

const url =
  dbUrl

const options = { useNewUrlParser: true, useUnifiedTopology: true };

const client = new MongoClient(url, options);

client.connect();

function getClient(){
    return client;
}


export default getClient
