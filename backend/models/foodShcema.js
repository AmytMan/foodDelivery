import mongoose from 'mongoose';
const {Schema} = mongoose;

const foodSchema = new Schema({
    name:{
        type: String ,
        required:true
    },
    CategoryName:{
        type: String ,
        required:true
    },
    description:{
        type: String ,
        required:true
    },
    img:{
        type: String ,
        required:true
    },
    options:{
        type: Date ,
        default:Date.now
    }
})

const userModel= mongoose.model('',UserSchema)
export default userModel;