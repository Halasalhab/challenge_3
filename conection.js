const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/ch3',{ useNewUrlParser: true });
mongoose.connection.once('open',()=>{
    console.log('connected')
}).on('error',()=>{
    console.log('the erroe',error);
});