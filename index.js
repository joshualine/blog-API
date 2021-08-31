const express = require('express');
const mongoose = require('mongoose');
const postsRoutes = require('./routes/posts');

const app = express();

// //Set up default mongoose connection
// var mongoDB = 'mongodb://127.0.0.1/my_database';
// mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
// //Get the default connection
// var db = mongoose.connection;
// //Bind connection to error event (to get notification of connection errors)
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// //Define a schema
// var Schema = mongoose.Schema;
// var BlogModelSchema = new Schema({
//   title: String,
//   description: String,
//   a_date: Date
// });

// // Compile model from schema
// var BlogModel = mongoose.model('BlogModel', BlogModelSchema );

mongoose.connect(
  "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false",
  { useNewUrlParser: true },
  () => console.log('DB is connected')
);

// Home ROUTE
app.get('/', (req, res) => {
  res.send('This is the home page');
})

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Middleware---------
app.use('/posts', postsRoutes);
 
app.listen(3000, console.log('listening a port 3000'))