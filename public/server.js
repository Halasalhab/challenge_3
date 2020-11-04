const express=require('express');
const app=express();
// app.use(express.static('client')
// const app = express()
const port=3001;
app.get('/form',function(req,res,next){
    res.json([
        {
            id:1
        }
    ])
})
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
module.export= app;
