const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.question("Qual é a sua idade? ", (idade) => {
    if (idade < 18) {
        console.log(`Programa proibido para menores de idade!`);
    } else if (idade >= 40) {
        console.log(`Tá com o pé na cova já hein`);
    } else {
        console.log(`Tudo bem, você é maior de idade`);
    }
    readline.close();
});
