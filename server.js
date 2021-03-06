const dotenv = require('dotenv');
const mongoose = require('mongoose');
const app = require('./src/app');

dotenv.config({path: './config.env'});

const DB = process.env.DATABASE.replace(
    '<password>',
    process.env.DATABASE_PASSWORD
  );
  
  mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log('DB connection success'));


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App running on ${port}...`)
});