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

    // Definir el esquema de tu documento
    const mySchema = new mongoose.Schema({
      name: String,
      age: Number,
      email: String
    });

    // Crear el modelo para tu documento
    const myModel = mongoose.model('Persona', mySchema);

    // Insertar un primer documento (opcional)
    const firstDocument = new myModel({
        name: 'John Doe',
        age: 30,
        email: 'john.doe@example.com'
    });

    firstDocument.save()
      .then(result => {
              console.log('Primer documento insertado:', result);
      })
      .catch(err => {
        console.error('Error al insertar el primer documento:', err);
      });
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