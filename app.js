const { response } = require('express');
const express = require('express');
const { request } = require('http');

const app = express();

app.get('/hola', (request, response) => {
    console.log(request);
    response.send('Este es mi servidor de prueba');
})

app.listen(3000, () => {
    console.log('Servidor arriba en puerto 3000');
})