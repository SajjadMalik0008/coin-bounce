const express = require('express');
const dbConnect = require('./database/index');
const {PORT} = require('./config/index');
const router = require('./routes/index');
const errorHandler = require('./middleware/errorHandler');
const cookieParcer = require('cookie-parser');

const app = express()
const port = PORT


app.use(cookieParcer());
app.use(express.json());
app.use(router);
app.use('/storage', express.static('storage'));
dbConnect();
app.use(errorHandler);
app.get('/', (req, res) => {
    res.json({msg: 'Hello World! this is my 1st app dfdf!'})
  })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    console.log(`${router}`)
  })