const minimist = require("minimist");

//Módulo externo
const args = minimist(process.argv.slice(2));
const argumento1 = parseInt(args["argumento1"]);
const argumento2 = parseInt(args["argumento2"]);

//Módulo interno
const soma = require("./soma").soma;

const resultado = soma(argumento1, argumento2);
console.log(`O resultado da soma é: ${resultado}`);
