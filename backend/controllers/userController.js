import userModel from "../models/Users.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

class userController{
  static createUser=async (req,res)=>{
    const hashPassword = await bcrypt.hash(req.body.password ,10)
    try {
      await userModel.create({
      name: req.body.name,
      password: hashPassword,
      location: req.body.location, 
      email: req.body.email,
      });
      res.json({sucess:true})
    } catch (error) {
      console.log(error);
    }
  }
  static verifyUser = async (req, res) => {
    const secretkey = process.env.SECRET_KEY
    const { email, password } = req.body;
    const result = await userModel.findOne({ email: email });
  
    if (!result) {
      return res.status(400).json({ error: "Try logging in with correct credentials" });
    } else {
      const isMatch = await bcrypt.compare(password, result.password);
      if (result.email == email && isMatch) {
      
        const authToken = jwt.sign({id:result._id}, secretkey,{expiresIn:"1hr"});
        res.cookie('token', authToken, {
          expires: new Date(Date.now() + 1 * 86400),
          httpOnly: true });
        return res.status(200).json({ success: "Logged in successfully", token: authToken });
      } else {
        return res.status(400).json({ error: "Password doesn't match the given email" });
      }
    }
  };
  static getuser = async(req, res)=>{
    const id = req.id;
    let user
     try {
      user = await userModel.findById(id,"-password")
     } catch (error) {
      return new Error(error)
     }
     if(!user){
      return res.status(404).json({Error:'user not found'})
     }
     return res.status(200).json({user})
  }
}  
export {userController}