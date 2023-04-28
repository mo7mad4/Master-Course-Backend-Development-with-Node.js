const {writeFile, open} = require('fs')

// "a+" =>خلي القديم موجود وضيف عليه
open("./data/story.txt", "a+",(err,fd)=>{
    if(err){
        console.log(err)
        return;
    }
        writeFile(fd,"hello MOhammed", (err)=>{
            if(err){
                console.log(err)
                return;
            }
        })
})