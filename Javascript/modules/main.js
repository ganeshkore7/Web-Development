// const { createServer } = require('node:http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.end('<h1>HelloWorld<h1>');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

const fs = require("fs")
console.log("Starting")
fs.writeFile("ganesh1.txt","ganesh is a good boy",()=>{
    console.log("done")
})
fs.readFile("ganesh1.txt",(error,data)=>{
    console.log(error,data.toString())
})
fs.appendFile("ganesh1.txt", " and webdeveloper", (e,d)=>{
    console.log(d)
})
console.log("Ending")










