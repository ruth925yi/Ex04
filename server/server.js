const express=require("express")
const {girls}= require("./data")
const path=require("path")
const app=express()
const PORT= process.env.PORT || 1050

app.get("/text",(req,res)=>{
    res.send("text routes")
})

app.get("/file",(req,res)=>{
    const path1=path.join(__dirname,"p.jpg")
    res.sendFile(path1)
})

app.get("/html",(req,res)=>{
    res.send("<h1>בשמחות אצל כולם</h1><a href='./file'>למעבר לחופה</a>")
})

app.get("/data",(req,res)=>{
    res.json(girls)
})

app.get("/data2",(req,res)=>{
    mapg=girls.map((a)=>{
        return {name:a.name, age:a.age}
    })
    res.json(mapg)
})

app.listen(PORT,()=>{
    console.log(PORT)
})