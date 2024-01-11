const express = require('express')
const app = express()
const port = process.env.PORT || 8000

app.get('/', (req, res)=>{
    console.log('Server running fine')
    res.send("Hello server is ready")
})

app.listen(port, ()=> console.log(`server is running on ${port}`))