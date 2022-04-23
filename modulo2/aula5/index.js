const minimist = require("minimist");

const args = minimist(process.argv.slice(2));
const nome = args["nome"];
const profissao = args["profissao"];
const idade = args["idade"];
console.log(`Nome: ${nome}, idade: ${idade}, profissão: ${profissao}`);
