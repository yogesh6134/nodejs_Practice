const fs = require('fs')
const http = require('http')

const server = http.createServer((req, res ) => {

    let data = fs.readFileSync(`${__dirname}/data.json`, 'utf-8')
    const objData = JSON.parse(data)

    if(req.url == '/'){
        res.end('server created successfully')
    }
   else if(req.url == '/about'){
        res.end('wellcome to about page successfully')
    }
    else if(req.url == '/contact'){
        res.end('wellcome to contact us page successfully')
    }
    else if(req.url == '/user'){
        res.writeHead(200, {"content-type" : "application/json"})
        res.end(objData[0].title)
    }
    else {
        res.writeHead(404, {"content-type" : "text/html"})
        res.end('<h1> 404 error url does not exist </h1>')
    }

})

server.listen(8000, '127.0.0.1', ()=> {
    console.log("listrn to server 8000")
})
