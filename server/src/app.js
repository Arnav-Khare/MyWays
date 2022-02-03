const express = require("express")
require("../src/db/connection");
const app = express();
const Register = require("../src/models/models");
const bcrypt = require(bcrypt);
const jwt = require("jsonwebtoken");
const port = process.env.PORT || 6001


app.use(express.json());
app.use(express.urlencoded({extendend:false}));
app.get('/',(req,res)=>{
    res.send("Hello form the server");
})

app.post('/register',async (req,res)=>{
    const hashValue = await bcrypt.hash(req.password,10);
    const userData = new Register({
        email:req.body.email,
        password:hashValue
    })
    const registerId = await userData.save();
    console.log(registerId)
    res.send(201);

})

app.post('/login',async (req,res)=>{
    try{

        const email = req.body.email;
        const password = req.body.password;
        const useremail = await Register.findOne({email:email})
        if(bcrypt.compare(password,useremail.password)){
            res.status('Login Done..')
        }else{
            throw('Invalid Details')
        }
    }catch(err){
        console.log(err)
    }
    res.send(201);

})
app.listen(port,()=>{
    console.log(`Server is running at ${port}`)
})