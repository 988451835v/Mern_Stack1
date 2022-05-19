const express=require("express");
const mongoose = require("mongoose")
const cors=require("cors")
const todos=require("./routes/todos")

 require("dotenv").config()
 const app=express()
 app.use(cors())
 app.use(express.json())

 app.use("/api/todos",todos)

app.get("/",(req, res) => {
res.send("Welcome to our todos app........................")
})



const connection_string=process.env.CONNECTION_STRING
const port=process.env.PORT || 5000

app.listen(port, () => {
console.log(`Server running on post ${port}`)
})

mongoose.connect(connection_string, {
    useNewUrlParser:true,
    // useCreateIndex:true,
    useUnifiedTopology:true,
    
})
.then(()=> console.log("Mongodb connection was istablished"))
.catch((error) => console.error("Mongo connection failed:",error.message))