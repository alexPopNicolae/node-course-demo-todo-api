const { MongoClient, ObjectID } = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect(
  'mongodb://localhost:27017/TodoApp',
  function(err, db) {
    if (err) {
      console.log('Unable to connect to mongodb server');
      return;
    }
    console.log('Conected to MongoDb server');

    db.collection('Todos')
      .findOneAndUpdate(
        {
          _id: new ObjectID('5ba0c21b803fa03e9c4df7f7')
        },
        {
          $set: {
            completed: true
          }
        },
        {
          returnOriginal: false
        }
      )
      .then(result => {
        console.log(result);
      });
    // db.close();
  }
);
