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



// db.collection('Users').findOneAndDelete({name: 'John_wae'}).then((result) => {
  //   console.log(result);
  // });


  // db.collection('Users').deleteMany({name: 'John'}).then((result) => {
    //   console.log(result);
    // });


    // db.collection('Users').deleteOne({name: 'John_war'}).then((result) =>{
      //   console.log(result);
      // });
