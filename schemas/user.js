const mongoose=require('mongoose');
module.exports=mongoose.model('user',{
    name:String,
    email:String,
    password:String
});
