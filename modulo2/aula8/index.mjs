import chalk from "chalk";

const nota = process.argv[2];
if (nota >= 5) {
    console.log(chalk.green("Parabéns, você foi aprovado!!!"));
} else {
    console.log(chalk.bgRedBright.black.bold("Reprovado!"));
}
