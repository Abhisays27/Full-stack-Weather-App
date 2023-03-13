const express = require('express');
const path = require('path')
const app = express();
const port = process.env.PORT || 8000;
// public static path
const static_path = path.join(__dirname,"../public");
app.use(express.static(static_path ));

//Routing
app.get("",(req,res)=>{
    res.send("welcome to nautiyal channel1")
})

app.get("/about",(req,res)=>{
    res.send("welcome to about page")
})

app.get("/weather",(req,res)=>{
    res.send("welcome to weather page")
})

app.get("/weather",(req,res)=>{
    res.send("welcome to weather page")
})

app.get("*",(req,res)=>{
    res.send("opps 404 error page!")
})




app.listen(port,()=>{
    console.log(`listening to the port ${port}`)
})