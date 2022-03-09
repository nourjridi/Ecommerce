import mongoose from "mongoose"
const userSchema=mongoose.Schema({
   nomuser:{type:String,required:true},
   telephone:{type:String,required:false},
   email:{type:String,required:false},
   password:{type:String ,required:true},
   register_date: {type:Date ,required:false} 
})
const User=mongoose.model('user',userSchema);
export default User