const http = require("http")
const PORT = 3000;

const server = http.createServer()

//event listen => run async
server.on('listening', ()=>{
    console.log(`server is run now at prot ${PORT}`)
})
//event
server.listen(PORT);