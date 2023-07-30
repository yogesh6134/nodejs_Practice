const express = require('express')
const sendMail = require('./sendMail')

const app = express()
let PORT = 8000

app.get('/', (req, res)=> {
    res.send('i am server')
})

app.get('/mail', sendMail)

const start = async() => {
    try{
app.listen(PORT, ()=> {
    console.log(`i am live server on ${PORT}`)
})
    }
    catch (err){console.log(err)}
}

start()