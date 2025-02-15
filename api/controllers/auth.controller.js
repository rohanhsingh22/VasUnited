import User from "../models/user.model.js"
import bcrypt from 'bcryptjs'
import { errorHandler } from "../utils/error.js"
import jwt from  'jsonwebtoken'


export const signup = async (req, res , next) => {
    const { username, email, phone, password, userType, termsAccepted } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10)
    const newUser = new User({ 
        username, 
        email, 
        phone,
        password: hashedPassword,
        userType,
        termsAccepted
    })

    try {
        await newUser.save()
        res.json('Signup successful')
        
    } catch (error) {
        console.error('Error during signup:', error);
       next(error) ;
    }
}

export const signin = async (req , res , next) =>{
    const{ email , password} = req.body

    try{
        const validUser = await User.findOne({email})
        if(!validUser){
        return next(errorHandler(404, "User not found"))
        }
        const validPassword = bcrypt.compareSync(password , validUser.password)
        if(!validPassword){
        return next(errorHandler(400, "Invalid User"))
    }
    const {password : pass , ...rest} = validUser._doc
    const token = jwt.sign({id: validUser._id}, process.env.SECRET_KEY, {expiresIn: "24h"}) 
    res.cookie('access_token', token, {httpOnly: true}).status(200).json(rest)
    }

    catch(error){
      next(error);
    }
}


export const signOut = async (req, res, next) => {
    try {
      res.clearCookie('access_token');
      res.json({ message: 'Signed out successfully' });
    } catch (error) {
      next(error)
    }
  };
  