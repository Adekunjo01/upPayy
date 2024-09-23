const express = require("express")
const cors = require("cors")
const app = express();

app.use(express.json())
app.use(cors())



app.listen(5000, ()=>{
    console.log("app listening to local host 5000")
})