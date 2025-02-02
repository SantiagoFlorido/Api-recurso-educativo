const express = require('express');
const cors = require('cors');
const { SerialPort } = require('serialport'); // Para manejar el puerto COM

const config = require('../config')
const app = express();
const db = require('./utils/database')
const initModels = require('./models/initModels')
const TalleresRouter = require('./Talleres/talleres.router')


// Habilitar CORS
app.use(cors());
app.use(express.json());

//autenticacion base de datos
db.authenticate()
    .then(()=>console.log('Database autentificada'))
    .catch((err)=>console.log(err))
//sincornizar database
db.sync()
    .then(()=>console.log('database sincronizada'))
    .catch((err)=>console.log(err))

//inicar los modelos
initModels()

app.get('/', (req,res)=>{
  res.status(200).json({
    status: 200,
    message: 'OK!',
    routes: {
      users: ""
      }
  })
})

app.use('/api/v1/talleres', TalleresRouter)

// Endpoint para probar conexión al puerto COM
app.get('/api/v1/serial', async (req, res) => {
  try {
    const ports = await SerialPort.list();
    res.json({ status: 'success', ports });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
});

// Iniciar el servidor
app.listen(config.api.port, ()=>{
  console.log(`server started on ${config.api.host}`)
})

module.exports = app