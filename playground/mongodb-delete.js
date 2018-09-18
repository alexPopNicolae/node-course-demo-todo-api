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

    //deleteMany

    // db.collection('Todos')
    //   .deleteMany({ text: 'eat lunch' })
    //   .then(result => {
    //     console.log(result);
    //   });

    //deleteOne

    // db.collection('Todos')
    //   .deleteOne({ text: 'eat lunch' })
    //   .then(
    //     result => {
    //       console.log('Statusul este: ');
    //       console.log(result.result);
    //     },
    //     err => {
    //       console.log('Could not perform operation because of error: ');
    //       console.log(err);
    //     }
    //   );

    //findOneAndDelete

    // db.collection('Todos')
    //   .findOneAndDelete({ completed: false })
    //   .then(result => {
    //     console.log('Asta e ceea ce vine');
    //     console.log(result);
    //   });

    //deleteMany users

    db.collection('Users')
      .deleteMany({ name: 'Alex Pop' })
      .then(result => {
        console.log('Statusul pentru deleteMany este: ');
        console.log(result.result);
      });

    //findOneAndDelete Users
    db.collection('Users')
      .findOneAndDelete({ name: 'Alexandru' })
      .then(result => {
        console.log('Statusul pentru findOneAndDelete este: ');
        console.log(result);
      });

    // db.close();
  }
);
