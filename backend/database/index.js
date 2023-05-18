const mongoose = require('mongoose');
const {MONGODB_CONNECTION_STRING} = require(`../config/index`);

const dbConnect = async () => {
    try {
        const conn = await mongoose.connect(`${MONGODB_CONNECTION_STRING}`);
        console.log(`Database connected ${conn.connection.host}`)
    } catch (error){
        console.log(`Error ${error}`)
    }    
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  }

  module.exports = dbConnect;