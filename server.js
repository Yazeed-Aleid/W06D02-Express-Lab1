const express = require('express');
const app = express();
const router = express.Router();



app.use('/',router)


app.use((req,res)=>{
    res.status(404).send('Sorry! Can’t find that resource. Please check your URL')
})


router.get('/',function(req,res){
    res.send('Hello Main Page')
})

router.get('/about',(req,res)=>{
   res.sendFile(__dirname+'/public/about.html')



})

router.get('/contact',(req,res)=>{
    res.sendFile(__dirname + '/public/contact.html')
})

app.listen('3000',()=>{
    console.log('done');
})