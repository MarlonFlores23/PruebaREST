const mongoose = require('mongoose')
const CONFIG = require('./configuracion')

module.exports={
    conection : null, //importar la informacion con dos variables conecxion  y conectar
    connect : ()=>{
        if(this.conection)return this.conection
        return mongoose.connect(CONFIG.DB)
        .then(conn =>{
            this.conection = conn
            console.log('La conexion se realizo con exito!!!')

        })
        .catch(e => console.log('error en la conexion', e))
    }
}