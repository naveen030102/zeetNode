const app = require("express")()
port = 3456
app.listen(port)
console.log("server up and running on port ",port)
app.get("/",(req,res)=>
{
    console.log("get / executed")
    res.send({name:"naveen",age:"20"})
    res.end()
})
app.get("/work",(req,res)=>
{
    console.log("working")
    res.send({status:"running",code:"200"})

    res.end()
})


