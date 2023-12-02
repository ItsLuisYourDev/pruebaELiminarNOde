const express = require('express');
const serverless = require('serverless-http');
const app = express();
const router = express.Router();
require("../conexion.js")
const modelopersona = require("../Modelo/persona")

let records = [];

//Get all students
router.get('/', async (req, res) => {
  resultado = await modelopersona.find()
  res.json(resultado)
});

//Create new record
router.post('/add', async (req, res) => {
  const nuevoregistro = new modelopersona({
    nombre: req.body.nombre,
    apellidos: req.body.apellidos,
    email: req.body.email,
    telefono: req.body.telefono
  });
  await nuevoregistro.save();
  res.json({ status: "Equipo creado satisfactoriamente" })
});

//delete existing record
router.delete('/', async (req, res) => {
  const miide = req.params.id
  await modelopersona.findByIdAndDelete(miide)
  res.json({ status: "Registro eliminado" })
});

//updating existing record
router.put('/', async (req, res) => {
  const miide = req.body.id
  await modelopersona.findByIdAndUpdate(miide, req.body);
  res.json({ status: "Datos actualizados satisfactoriamente" })
});

router.get('/:id', async (req, res) => {
  const miide = req.params.id
  resultado = await modelopersona.findById(miide)
  res.json(resultado)
})

router.get('/webhook', (req, res) => {
  const VERIFY_TOKEN = 'tu_token_de_verificacion';
  const mode = req.query['hub.mode'];
  const token = req.query['hub.verify_token'];
  const challenge = req.query['hub.challenge'];
  if (mode && token === VERIFY_TOKEN) {

    res.status(200).send(challenge);
  } else {
    res.sendStatus(403);
  }
});


app.listen(3015)

app.use('/.netlify/functions/api', router);
app.use('/.netlify/functions/apip', require("../Rutas/personaruta.js"));
module.exports.handler = serverless(app);
