const http = require("http");
const fs = require("fs");
const port = 3000;

const server = http.createServer((req, res) => {
    console.count(`Server acessado!`);

    fs.readFile("index.html", (err, data) => {
        if (err) throw err;
        res.writeHead(200, { "content-type": "text/html" });
        res.write(data);
        return res.end();
    });
});

server.listen(port, () => {
    console.log(`Server iniciado`);
});
