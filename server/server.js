const express = require('express');
const bodyParser = require('body-parser');

var { mongoose } = require('./db/mongoose');
var { Todo } = require('./models/todo');
var { User } = require('./models/user');


var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  // console.log(req.body);
  var todo = new Todo({
    text: req.body.text,
    complete: req.body.complete
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  })
});

app.listen(3000, () => {
  console.log('Started port 3000');
});









// var newTodo = new Todo({
//   text: 'Cook Dinner'
// });
//
// newTodo.save().then((doc) => {
//   console.log('Save todo', doc);
// }, (e) => {
//   console.log('Unable to save todo', e);
// });

// var otherTodo = new Todo({
//   text: 'Edit this code'
// });
//
// otherTodo.save().then((doc) => {
//   console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
//   console.log('Unable to save todo', e);
// });


// var user = new User({
//   email: '        test@gmail.com      '
// });
//
// user.save().then((doc) => {
//   console.log(doc);
// }, (e) => {
//   console.log('Unable to save todo', e);
// });
