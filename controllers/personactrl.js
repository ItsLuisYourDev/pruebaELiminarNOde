const persona = {}
const modelopersona = require("../Modelo/persona")

persona.consultar_todo = async (req, res) => {
    resultado = await modelopersona.find()
    res.json(resultado)
}

persona.guardar_nuevo = async (req, res) => {
    const nuevoregistro = new modelopersona({
        nombre: req.body.nombre,
        apellidos: req.body.apellidos,
        email: req.body.email,
        telefono: req.body.telefono
    });
    await nuevoregistro.save();
    res.json({status: "Equipo creado satisfactoriamente"})
}

persona.actualiza_datos = async (req, res) => {
    const miide = req.body.id
    await modelopersona.findByIdAndUpdate(miide,req.body);
    res.json({status: "Datos actualizados satisfactoriamente"})
}

persona.consultar1 = async(req, res)=>{
    const miide = req.params.id
    resultado=await modelopersona.findById(miide)
    res.json(resultado)
    
}

persona.elimina1 = async(req, res)=>{
    const miide = req.params.id
    await modelopersona.findByIdAndDelete(miide)
    res.json({status:"Registro eliminado"})
}
module.exports = persona;