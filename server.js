
const express=require('express')
const app = express()
const mongoose = require('mongoose')
const routerurl= require('./routes/routes')
const cors = require('cors')

app.use(express.json())
app.use(cors())

app.use("/app",routerurl)



if(mongoose.connect('mongodb+srv://uthayaece2023:Uthayadev@cluster0.hypsg0o.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'))
    {
    console.log('Database connceted')
}
app.listen(4005, ()=>{
    console.log('server is up and run');
})
