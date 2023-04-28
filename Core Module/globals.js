const asbVal = Math.abs(-5);
console.log(asbVal)
global.appname = "My App";
console.log(process.env)
//argv => some information is already run Or the process is run right now 
console.log(process.argv)

// {
//     rss: 35024896,
//     heapTotal: 8417280,
//     heapUsed: 4302040,
//     external: 1764627,
//     arrayBuffers: 16606
//   }
console.log(process.memoryUsage())