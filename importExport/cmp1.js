const http = require('http')
const  chalk  = require("chalk");
const validator = require('validator');
const {add, mul, sub, name} = require('./cmp2')

console.log(add(4,6))
console.log(mul(4,6))
console.log(sub(4,6))
console.log(name)
const res = validator.isEmail('yogi@gmail.c');
console.log(chalk.blue.underline.bold(`Hello world!, ${name}, ${res? chalk.green.inverse(res): chalk.red.inverse(res)}`));

const server = http.createServer((req, res ) => {

    
    if(req.url == '/'){
        res.end('server created successfully')
    }
   else if(req.url == '/about'){
        res.end('wellcome to about page successfully')
    }
    else if(req.url == '/contact'){
        res.end('wellcome to contact us page successfully')
    }
    else {
        res.writeHead(404, {"content-type" : "text/html"})
        res.end('<h1> 404 error url does not exist </h1>')
    }

})

server.listen(8000, '127.0.0.1', ()=> {
    console.log("listrn to server 8000")
})
