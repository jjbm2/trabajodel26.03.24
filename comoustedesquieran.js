const mongoose = require('mongoose')
const url_bd = "mongodb://localhost:27017"

mongoose.connect(url_bd)
.then (() =>{
    console.log("conexion eitosa a base de datos")
})
.catch((err)=>{
    console.log("no jaloo")
})

const alumnos_esquema = new mongoose.Schema(
    {
        name:{
            type:String
        },
        apepat:{
            type:String
        },
        apemat:{
            type:String
        },
        numerotel:{
            type:Number
        }
    }
)
const alumnos= new mongoose.model("tabla de registro de estudiantes", alumnos_esquema)

alumnos.create(
    {
        name: "jesus guadalupe",
        apepat: "guadalupe",
        apemat: "juanes",
        numerotel:"654654654"
}
)
