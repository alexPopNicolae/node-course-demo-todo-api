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
    // db.collection('Todos')
    //   .find({ _id: new ObjectID('5ba0dbcd0db1c443965c74c9') })
    //   .toArray()
    //   .then(
    //     docs => {
    //       console.log('Todos: ');
    //       console.log(JSON.stringify(docs, undefined, 2));
    //     },
    //     err => {
    //       console.log('Unable to fetch todos', err);
    //     }
    //   );

    // db.collection('Todos')
    //   .find()
    //   .count()
    //   .then(
    //     count => {
    //       console.log(`Todos count: ${count}`);
    //     },
    //     err => {
    //       console.log('Unable to fetch todos', err);
    //     }
    //   );

    db.collection('Users')
      .find({ name: 'Alex Pop' })
      .toArray()
      .then(
        users => {
          console.log('Asta e ceea ce primim de la baza de date');
          console.log(JSON.stringify(users, undefined, 2));
        },
        err => {
          console.log('Unable to fetch users because of error: ');
          console.log(err);
        }
      );
    // db.close();
  }
);
