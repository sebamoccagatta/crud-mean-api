const express = require('express');

// creamos el servido
const app = express();

// definimos ruta principal
app.get('/', (req, res) => {
    res.send('Hola Mundo');
});

app.listen(4000, () => {
    console.log('El servidor esta corriendo en el puerto 4000');
})