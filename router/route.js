const express=require('express');
const {registryPost, loginPost } = require('../controllar/controll');
const router=express.Router();

router.post("/register",registryPost);
router.post("/login",loginPost);

module.exports=router