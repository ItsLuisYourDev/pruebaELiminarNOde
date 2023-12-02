const {Schema,model} = require("mongoose")

const schemaequipo = new Schema(
{
    nombre:{type:String,require:true},
    apellidos: {type:String,require:true},
    email:{type:String,require:true},
    telefono: {type:String,require:false},
}, 
{
    timestamps: true
});

module.exports = model("persona",schemaequipo);
