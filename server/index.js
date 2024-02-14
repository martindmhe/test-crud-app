const express = require('express')
const app = express()
const cors = require('cors')

const port = 3000;
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    console.log("Working")
    res.sendStatus(200)
})

app.post('/post', (req, res) => {
    const body = req.body
    const { text } = body;
    console.log(text)
    // const reqText = body.text
    // console.log(`Received text: ` + reqText)
    res.sendStatus(200)
} )

app.listen(port, () => {
    console.log("Server running")
})