const {opendir} = require('fs')

opendir('./',async(err, dir)=>{
    for await(let dirent of dir){
        console.log(dirent.name)
    }
})