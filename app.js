const express = require("express")

const app = express()

const port = 8000

app.get('/', (req, res) => {
    res.send("Beleza...")
})

app.listen(port, ()=>{
    console.log(`Escutando a porta ${port}`)
})