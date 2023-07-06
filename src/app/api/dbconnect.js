import {MongoClient} from 'mongodb'

const url =
  "mongodb+srv://negu:neguspotted@firstdb.wxhn4f5.mongodb.net/?retryWrites=true&w=majority";

const options = { useNewUrlParser: true, useUnifiedTopology: true };

const client = new MongoClient(url, options);

client.connect();

function getClient(){
    return client;
}


export default getClient
