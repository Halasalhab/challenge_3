var express=require('express');
var router=express.Router();
const app = express()
var port=3001;
router.get('/',function(req,res,next){
    res.json([
        {
            id:1
        }
    ])
})
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })

// app.use(express.static('client')
