const http = require("http");

const port = 3000;

const server = http.createServer((req, res) => {
    console.count(`Server criado!`);
    res.statusCode = 200;
    res.setHeader("content-type", "text/html");
    res.end(
        "<h1>Devolvendo HTML para o navegador!</h1><p>Testando acentos!: Olá! Parabéns! João comprou pão</p>",
        "utf8"
    );
});

server.listen(port, () => {
    console.log(`Escutando porta ${port}`);
});
