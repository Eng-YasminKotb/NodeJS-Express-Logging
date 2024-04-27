const express= require('express')
const expressWinston =require('express-winston') 
const  {transports, format} = require('winston')
const app=express()
const port=4000


//Middlleware
app.use(express.json())

//ExpressWiston
app.use(expressWinston.logger({
    transports:[
        new transports.Console()
    ],
    
    format: format.combine(
        format.timestamp(),
        format.json(),
        format.prettyPrint()
    ) 
}))
app.get('/',(req,res)=>{
res.sendStatus(200)
})













app.listen(port,()=>{
console.log("hello server!")
})