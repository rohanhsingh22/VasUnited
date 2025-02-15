import mongoose from 'mongoose' 

const userSchema= new mongoose.Schema({
    username: {
        type:String ,
        required: true,
        unique: true
    } , 
    email: {
        type:String ,
        required: true,
        unique: true
    } , 
    phone: {
        type:String ,
        required: true,
    },
    password: {
        type:String ,
        required: true,  
    } , 
    userType: {
        type:String ,
        enum: ['user', 'agent', 'builder', 'agency'],
        required: true
    },
    termsAccepted: {
        type:Boolean ,
        required: true
    } ,
    avatar: {
        type:String ,
        default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
    }, 
}, {timestamps:true})

const User = mongoose.model("User" , userSchema)

export default User;