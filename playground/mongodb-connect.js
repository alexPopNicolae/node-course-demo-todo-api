//const MongoClient = require('mongodb').MongoClient;
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

    // db.collection('Todos').insertOne({ text: 'Oare il pune??' }, (err, result) => {
    //   if (err) {
    //     return console.log('Unable to inser todo ', err);
    //   }

    //   console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    db.collection('Users').insertOne(
      { name: 'Alex Pop', age: 32, location: 'Cluj-Napoca Romania' },
      (err, result) => {
        if (err) {
          return console.log('Unable to insert user into mongodb ', err);
        }
        console.log('Cateva date care ma intereseaza: ');
        console.log(JSON.stringify(result.ops, undefined, 4));
        console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
      }
    );

    db.close();
  }
);
