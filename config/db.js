const mongoose = require("mongoose");
const config=require('./config')
const dbURl=config.db.url
mongoose.connect(dbURl)
.then(()=>{
    console.log("mongodb atlas is connected")
})
.catch((error)=>{
    console.log(error.message)
})