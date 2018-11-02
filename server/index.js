const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const PC = require('./controllers/controller');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());
massive( process.env.CONNECTION_STRING ).then( dbInstance => {
    app.set('db', dbInstance);
}).catch(err => console.log(err));
const port = process.env.PORT;

app.get('/api/products', PC.read);
app.post('/api/products', PC.create)

app.listen(port, ()=>{
    console.log('Listening on port', port);
});