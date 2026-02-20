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
