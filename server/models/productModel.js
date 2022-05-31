const mongoose = require('mongoose');
const productSchema = mongoose.Schema({ 
    
    title:{
        type:String ,
        required: true,
    },
    desc:{
        type:String ,
        required: true,
    },
   image:{
        type:String ,
        required: true ,
        unique: true,
    },
    price:{
        type:String ,
        required: true,
    },
    qty:{
        type:Number,
       
    },
    
});

module.exports=mongoose.model ('product',productSchema);