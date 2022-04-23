const inquirer = require("inquirer");
const chalk = require("chalk");

inquirer
    .prompt([
        { name: "p1", message: "Qual a primeira nota?" },
        { name: "p2", message: "Qual a segunda nota?" },
    ])
    .then((resposta) => {
        const media = (parseInt(resposta.p1) + parseInt(resposta.p2)) / 2;

        if (media >= 5) {
            console.log(
                chalk.green(
                    `Parabéns!! sua média foi ${media} e você foi aprovado!`
                )
            );
        } else {
            console.log(
                chalk.red(
                    `Sua média foi ${media}, estando abaixo de 5, por esse motivo você foi reprovado!`
                )
            );
        }
    })
    .catch((err) => {
        console.log(err);
    });
