const {EventEmitter} = require("events");
const myEmitter = new EventEmitter()
myEmitter.on('greeting', (name)=>{
    console.log(`Welcome ${name}` )
})
myEmitter.emit("greeting", "Mohammed")
