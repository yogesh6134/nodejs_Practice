const EventEmiter = require('events')

const event = new EventEmiter()

event.on("sayName", (status, msg) => {
    console.log(`my name is yogesh status is ${status} and message is ${msg}`)
})
event.on("sayName", (status, msg) => {
    console.log(`my middle name is kumar status is ${status} and message is ${msg}`)
})

event.emit('sayName', 200, 'OK')