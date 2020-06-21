// const MongoClient = require('mongodb').MongoClient;
var {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodosApp', (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB Server');
  }
  else {
      console.log('Connected to MongoDB Server');
  }

  client.close();
});



// db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
    //   if (err) {
      //     return console.log('Unable to insert todo', err);
      //   }
      //   console.log(JSON.stringify(result.ops, undefined, 2));
      // });

// ES6 destructuring
// var user = {name: 'John', age: 25};
// var {name} = user;
// console.log(name);
