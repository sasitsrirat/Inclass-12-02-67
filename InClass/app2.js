const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'Product_CI2023';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('products');

    //Insert One Item
    //var obj = { name: "Coffee Mug", price: 10 }
    //const insertResult = await collection.insertOne(obj);
    //console.log('Inserted documents =>', insertResult);
    //var query = {price:10}

    var query = {price: {$gt:10}}
    const fineResult = await collection.find(query).toArray()
    console.log('Found Document ',fineResult)
    var obj = [ 
    { name: "Book", price: 10 },
    { name: "Pencil", price: 5 },
    { name: "Calculator", price: 40 },
    { name: "Notebook", price: 15 },
    { name: "T-Shirt", price: 20 },
    { name: "Jacket", price: 20 }
  ]
const insertResult = await collection.insertMany(obj);
console.log('Inserted documents =>', insertResult);

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
