const mongoose =require("mongoose")
const userSchema = new mongoose.Schema({
    name :{
        type : String,
        // require : true,   

    },
    email :{
        type : String,
        // require : true,
    },
    password :{
        type : String,
         //require : true,
         default:false
    },

    mobile:{
      tyep:Number,
      //require:true
    },
    city :{
        type : String,
         //require : true,
    },
    state :{
        type : String,
         //require : true,
    },
    // profilePic :{
    //     type : String,
       
    // },
   isActive :{
        type :Boolean,
         dafault:true,
    },
    role :{
        type : String,
         default: "user",
    },
  })
  userSchema.set('timestamps',true)
module.exports = mongoose.model('user', userSchema)