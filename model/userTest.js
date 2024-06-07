const mongoose = require("mongoose");
const encrypt = require('mongoose-encryption');

const modal=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:Number,
        required:true
    },
    createOn:{
        type:Date,
        default:Date.now
    }
})

const encKey = process.env.ENC_KEY;

modal.plugin(encrypt, { secret: encKey, encryptedFields: ['password'] });

module.exports=mongoose.model("login",modal)