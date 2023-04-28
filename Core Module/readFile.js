const {readFile, readFileSync} = require('fs') 
readFile('./data/story.txt','utf-8', (err, data)=>{
    if(err){
        console.log(err)
        return;
    }
    console.log("async", data)
})

const contant = readFileSync('./data/story.txt','utf-8')
console.log("sync", contant)