const fs = require('fs')

const http = require('http')

const server = http.createServer()



server.on('request', (req, res) => {

    // normal way

    //     fs.readFile('data.txt', (err, data) => {
    //         if (err) return res.end(err)
    //         res.end(data)
    //     })


    // with streaming

    // const resStrean = fs.createReadStream('data.txt')
    // resStrean.on('data', (chunkData) => {
    //     res.end(chunkData)
    // })
    // resStrean.on('end', () => {
    //     res.end()
    // })
    // resStrean.on('error', (er) => {
    //     console.log(er)
    //     res.end('something is wrong')
    // })

    // stream using pipe method

    const readStread = fs.createReadStream('data.txt')

    readStread.pipe(res)

})

server.listen(8000, '127.0.0.1')