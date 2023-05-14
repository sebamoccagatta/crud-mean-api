const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

// creamos el servido
const app = express();

// conectamos a la db
connectDB();

app.use(cors());

app.use(express.json());

app.use('/api/product', require('./routes/product'));

app.listen(4000, () => {
    console.log('El servidor esta corriendo en el puerto 4000');
})