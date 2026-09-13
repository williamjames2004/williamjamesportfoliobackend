const express = require("express");
const cors    = require("cors");

const app = express()
app.use(express.json())
app.use(cors())

app.get("/", (req,res)=>{
    try{
        return res.status(200).json({success: true});
    } catch(e){
        console.log(e.message);
        return res.status(500).json({success: false});
    }
})

const PORT = 5000;
app.listen(PORT, ()=>{console.log(`App is running on port ${PORT}`)});