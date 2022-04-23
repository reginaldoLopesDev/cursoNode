const x = 10;

try {
    x = 2;
} catch (error) {
    console.log(`Erro: ${error.message}`);
}

console.log(`Continuando o código...`);
