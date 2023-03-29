const mongoose =require("mongoose")
const companySchema = new mongoose.Schema({
    companyName :{
        type : String,
        require:true
    },
    location :{
        type : String,
         require : true,
         default:false
    },
    city :{
        type : String,
         require : true,
    },
    email :{
        type : String,
        require:true
     
    },
    founded :{
        type : String,
     require:true
    },
    // userId :{
    //     type : mongoose.Schema.Types.ObjectId,
    //      require : true,
    //      ref: 'user'
    // },
    company_logo :{
        type : String,
     require:true
    },
    isActive :{
        type : Boolean,
     require:true
    }
})
companySchema.set('timestamps',true)
module.exports = mongoose.models('company', companySchema)