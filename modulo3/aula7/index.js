const http = require("http");
const fs = require("fs");
const url = require("url");
const port = 3000;

const server = http.createServer((req, res) => {
    console.count(`Recebendo requests`);

    const urlInfo = url.parse(req.url, true);
    const name = urlInfo.query.name;
    if (!name) {
        fs.readFile("index.html", (err, data) => {
            if (err) throw err;
            res.writeHead(200, { "content-type": "text/html" });
            res.write(data);
            return res.end();
        });
    } else {
        fs.appendFile("arquivo.txt", `Nome: ${name}! \n`, (err, data) => {
            if (err) throw err;
            console.log(`Nome: ${name} salvo com sucesso!`);
        });
        res.writeHead(302, { Location: "/" });
        res.end();
    }
});

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
