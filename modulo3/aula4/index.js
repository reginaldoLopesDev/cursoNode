const http = require("http");
const url = require("url");

const port = 3000;
const server = http.createServer((req, res) => {
    console.count(`Server conectado!`);

    res.statusCode = 200;
    res.setHeader("content-type", "text/html");

    const urlInfo = url.parse(req.url, true);

    const name = urlInfo.query.name;

    if (!name) {
        res.end(
            `<h1>Por favor informar o nome: </h1><form method="GET"><input type="text" name="name"><input type="submit" value="Enviar"></input></input></form>`
        );
    } else {
        res.end(`Seja bem-vindo ${name}!`);
    }
});

server.listen(port, () => {
    console.log(`Criado server`);
});
