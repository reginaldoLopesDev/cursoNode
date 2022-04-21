console.log(`Método mais fácil: ${process.argv[2]}`);

const argv = process.argv.slice(2);
const nome = argv[0];

console.log(`Método mais trabalhoso: ${nome}`);
