const express = require("express")
const app = express()
const PORT = 3000

app.get('/', (req, res) => {
    res.send(`${PORT} portunda çalışan projenin anasayfası.`)
})

app.listen(PORT, () => {
    console.log(`${PORT} portunda dinleme başladı`)
})