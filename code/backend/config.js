const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://raj:RAJN98745@cluster0.plbei.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
   console.log("connected to mongodb")
})