const http = require("http");
const port = 5050;
const someError = true;

if(!someError){
    process.exit();
}

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      res.end(`
        <html>
            <head>
              <title>Hello Mohammed </title>
            </head>
        
            <body>
              <h1>Good morning</h1>
            </body>
        </html>
        `);
        break;
    case '/admin':
        res.end('the admin page')
        break;
    case '/user':
        res.end('the user page')
        break;
    default :
    res.end("404, the page not found")
    break;
  }
});
server.listen(port, () => {
  console.log(`the server listeing on port ${port}`);
});
