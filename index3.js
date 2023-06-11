const http = require("http");

const data = { age: 8 };

const server = http.createServer((req, res) => {
    console.log(req.method);
    switch (req.url) {
        case '/api':
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify(data));
            break;
        case "/":
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end("<h1>Hello World</h1>");
            break;
        case "/product":
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end("<h1>Hello World</h1>");
            break;
        default:
            res.writeHead(404);
            res.end();
    }
});

server.listen(8080);
