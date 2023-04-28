const {stat} = require('fs')
stat('./opendir.js',(err,state)=>{
    console.log(state)
})