import mongoose from 'mongoose';
const Schema=mongoose.Schema

const userSchema = new Schema({
 
 

   contact_name:{
      type:String
   },

   age:{

      type:Number
   },

   citizenship:{

      type:String
   },

 
},

);

const User = new mongoose.model("User",userSchema)

export default User;


