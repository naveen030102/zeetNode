const app = require("express")()
port = 3456
app.listen(port)
app.get("/",(req,res)=>
{
    console.log("get / executed")
    res.end()
})
