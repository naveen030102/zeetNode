const app = require("express")()
port = 3456
app.listen(port)
console.log("server up and running on port ",port)
app.get("/",(req,res)=>
{
    console.log("get / executed")
    res.end()
})
