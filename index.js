const express = require('express');
const connectDB = require('./config/db');

// creamos el servido
const app = express();

// conectamos a la db
connectDB();

app.use('/api/product', require('./routes/product'));

// definimos ruta principal
/* app.get('/', (req, res) => {
    res.send('Hola Mundo');
}); */

app.listen(4000, () => {
    console.log('El servidor esta corriendo en el puerto 4000');
})