// const MongoClient = require('mongodb').MongoClient;
var {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodosApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB Server');
  }
  else {
      console.log('Connected to MongoDB Server');
  }

  const db = client.db('TodosApp')
  
  // client.close();
});

// db.collection('Todos').find({
  //   _id: new ObjectID('5ede718665d4f40ee84be0f1')
  // }).toArray().then((docs) => {
    //   console.log('Todos');
    //   console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
      //   console.log('Unable to fetch todos', err);
      // });

      // db.collection('Todos').find().count().then((count) => {
        //   console.log(`Todos Data Count: ${count}`);
        // }, (err) => {
          //   console.log('Unable to fetch todos', err);
          // });

          // db.collection('Users').find({name: 'John'}).toArray().then((docs) => {
            //   console.log(JSON.stringify(docs, undefined, 2));
            // });
