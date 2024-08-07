import express from "express"
import cors from "cors"

//app config
const app = express();
const port = 4000

//middleware
app.use(express.json())
app.use(cors())

//API
app.get("/",(req,res)=>{
    res.send("API Working")
})

app.listen(port,()=>{
    console.log(`server started on http://localhost:${port}`)
})

