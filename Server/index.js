const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const product = require('./routers/products');
const db = require('./config/database');
const app = express();
const PORT = process.env.port || 5000;

//-- database
db.connect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true, limit:'30mb'}));
app.use(express.json());
app.use(cors());


app.use('/api/products', product);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});