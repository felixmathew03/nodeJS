const http=require("http")
const app=http.createServer((req,res)=>{
    console.log("Server created");
    res.end("Hai")
})
app.listen(3200)