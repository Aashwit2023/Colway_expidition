import User from  "../models/user.models.js";
import bcrypt from "bcryptjs";

export const home = async (req,res)=>{
 try{
   return res.status(200).send(
    "Welcome to Landing Page using controllers "
   );
 }
 catch(error){
   console.error(error);
   return res.status(500).json({
     message:"Internal Server Error"
   });
 }
};

export const signUp = async (req, res)=>{
    try {
      let  {fullname, email, password} = req.body;
      let ExistEmail =  await User.findOne({email});
      if (ExistEmail) {
        return res.status(400).json({message: "Email already exists !"})
      }
      let hassedPassword = await bcrypt.hash(password, 10);
      const user = await User.create({
        fullname,
        email,
        password: hassedPassword
      });
      return res.status(201).json(user);

    } catch (error) {
      return res.status(500).json({message:error});
    }
}

export const login = async (req,res)=>{
 try{
   console.log(req.body);

   return res.status(200).json({
     message:"Login API Working Fine",
     data:req.body
   });
 }
 catch(error){
   console.error(error);

   return res.status(500).json({
    message:"Internal Server Error"
   });
 }
};
