//Streams => transport data between sender and resever

/**
 * types of streams:
 * read, write, duplex, transform 
 */

const {createReadStream,createWriteStream} = require('fs')

const readStream = createReadStream('./data/story.txt')
const writeStream = createWriteStream('./data/output.txt')

readStream.pipe(writeStream)









