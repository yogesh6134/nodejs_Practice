const os = require('os')

const op = os.cpus()

// console.log(op)

const memory = os.freemem()
// console.log(memory)
// console.log(`${memory / 1024/1024}`)


// const totalmemory = os.totalmem()
// console.log(`${totalmemory / 1024/1024/1024}`)

// const hostname = os.hostname()
// console.log(hostname)

console.log(os.machine())
console.log(os.platform())
console.log(os.arch)


