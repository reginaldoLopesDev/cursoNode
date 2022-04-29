const fs = require("fs");

fs.rename("arquivo.txt", "novoArquivo.txt", (err) => {
    if (err) {
        console.log(err.message);
        return;
    }
    console.log(`Arquivo renomeado com sucesso!`);
});
