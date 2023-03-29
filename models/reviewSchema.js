const mongoose =require("mongoose")
const crudSchema = new mongoose.Schema({
    subject :{
        type : String,
    
       require:true
    },
    review :{
        type : String,
     require:true
    },
    isActive :{
        type : Boolean,
     require:true
    },
   createAt :{
        type : Boolean,
     require:true
    },
    updateAt :{
        type : Boolean,
     require:true
    },
    
})
module.exports = mongoose.models('review', crudSchema)