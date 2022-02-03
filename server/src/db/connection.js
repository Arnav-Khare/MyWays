const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/blogSite",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("Connection Successful")
}).catch((e)=>{
    console.log(e);
})