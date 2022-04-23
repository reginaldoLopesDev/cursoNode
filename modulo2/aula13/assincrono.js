const fs = require("fs");

console.log(`Início`);

fs.writeFile("arqui.txt", "Tchau", (err) => {
    if (err) console.log(err);
    console.log(`Arquivo criado`);
});
console.log(`Fim`);
