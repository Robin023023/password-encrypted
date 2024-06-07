require('dotenv').config()

const dev={
    app:{
        port:process.env.port || 3001
    },
    db:{
        url:process.env.DR_DB || 'mongodb:localhost://27017/DR_DB'
    }
}

module.exports=dev