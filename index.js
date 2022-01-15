const http = require("http");
const fs = require('fs').promises;

let indexFile;
let styleFile;
let errorFile;

const host = 'localhost';
const port = 8000;

const data = JSON.stringify({
    todo: 'Buy the milk'
  })
const options = {
    port: 81,
    path: '/api',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': data.length
}} 

const req = http.request(options, res => {
    console.log(`statusCode: ${res.statusCode}`)
  
    res.on('data', d => {
      process.stdout.write(d)
    })
  })
  
  req.on('error', error => {
    console.error(error)
  })
  
  req.write(data)
  req.end()

const requestListener = async function (req, res) {
    res.setHeader("Content-Type", "text/html");
    switch (req.url) {
        case "/test":
              res.writeHead(200);
              res.end("Test");
            break;
        case "/":
            res.writeHead(200);
            res.end(indexFile);
            break;
        case "/style.css":
            res.writeHead(200, {"Content-Type": "text/css"});
            res.end(styleFile);
            break;
        default:
            res.writeHead(200);
            res.end(errorFile);
    }
};


const startServer = async () => {
    const server = http.createServer(requestListener);

    console.log("Starting social-links");

    fs.readFile(__dirname + "/web/main.html")
        .then(contents => {
            indexFile = contents;
        })
        .catch(err => {
            console.error(`Could not read index.html file: ${err}`);
            process.exit(1);
        });

    fs.readFile(__dirname + "/web/styles/style.css")
        .then(contents => {
            styleFile = contents;
        })
        .catch(err => {
            console.error(`Could not read index.html file: ${err}`);
            process.exit(1);
        });

    fs.readFile(__dirname + "/web/error.html")
        .then(contents => {
            errorFile = contents;
        })
        .catch(err => {
            console.error(`Could not read index.html file: ${err}`);
            process.exit(1);
        });

console.log("Starting webserver")

    server.listen(port, host, () => {
        console.log(`Server is running on http://${host}:${port}`);
    })

console.log("Everything up and running!! :)")
}

startServer();