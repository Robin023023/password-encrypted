const User=require('../model/userTest')

const registryPost=async(req,res)=>{
   try {
      const createRegis=new User({
         email:req.body.email,
         password:req.body.password
      })
      await createRegis.save();
      res.status(200).json(createRegis)
   }
    catch (error) {
     res.status(500).send(error.message) 
   }
}

const loginPost = async (req, res) => {
   try {
      const { email, password } = req.body;
      const user = await User.findOne({ email: email });
      if (user && user.password ==password) { 
         res.status(200).json({ status: "valid user" });
      } else {
         console.log("invalid credentials")
      }
   } catch (error) {
      res.status(500).send(error.message);
   }
};



 module.exports={registryPost,loginPost}

    
 