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

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5eef235779d471ba237bf86d')
  }, {
    $set: {
      name: 'John Was'
    },
    $inc: {
      age: 3
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  // client.close();
});
