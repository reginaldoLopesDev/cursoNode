const x = 17;
const idade = 21;
const nome = "Reginaldo";
const z = [1, 2];

console.log(x, nome, z);

//Contador de console
console.count(`O valor de x é: ${x}, contagem: `);
console.count(`O valor de x é: ${x}, contagem: `);

//Variável entre string
console.log("O nome dele é %s e ele tem %s anos", nome, idade);

//Limpar o console
console.log(`Limpando o console...`);
setTimeout(() => {
    console.clear();
}, 2000);
