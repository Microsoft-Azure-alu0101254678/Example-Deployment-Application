const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

let messagge = "";

// Conexión a la base de datos de MongoDB en Azure Cosmos DB
const mongoURI = "mongodb://example-deployment-application:sosfHFlXWYyBxTj44mot2HZ2MPuaDUG6aDpUt3Rrej1Snl7GVvXgBjB7PyPBrI8fUlnYPyqQ4hUoACDbi1GfnA==@example-deployment-application.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&replicaSet=globaldb&maxIdleTimeMS=120000&appName=@example-deployment-application@";
mongoose.connect(mongoURI, {

}).then(() => {
    console.log('Conexión exitosa a Azure Cosmos DB');
    messagge = 'Conexión exitosa a Azure Cosmos DB';
  }).catch((error) => {
    console.error('Error de conexión a Azure Cosmos DB:', error);
  });

const app = express();
app.use(cors());
const PORT = process.env.PORT || 3000;

// Ruta principal para verificar la conexión y realizar la conexión a la base de datos
app.get('/', (req, res) => {
    res.send(messagge);
});

app.listen(PORT, () => {
    console.log(`Servidor en ejecución en el puerto ${PORT}`);
});