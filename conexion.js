const mongoose = require("mongoose")

//uri = "mongodb://alumno:54321@base.patito.com:27017/prueba"
//                172.16.58.17
//
//uri= "mongodb://127.0.0.1:27017/test"
uri = "mongodb+srv://itsLuis:Bsc15@cluster0.44ul8pm.mongodb.net/test"

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=> console.log('Conectado a la base de datos de mongodb')) 
  .catch(e => console.log('error de conexión', e))