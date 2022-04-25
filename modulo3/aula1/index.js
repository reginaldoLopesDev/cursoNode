const http = require("http");

const server = http.createServer((req, res) => {
    console.count(`Requisições: `);
    res.write("Parabéns vós sois foda");
    res.end();
});
const port = 3000;
server.listen(port, () => {
    console.log("Server criado!");
});
