const chalk = require("chalk");
const inquirer = require("inquirer");

inquirer
    .prompt([
        { name: "p1", message: "Qual é seu nome?" },
        { name: "p2", message: "Qual é sua idade?" },
    ])
    .then((response) => {
        if (!response.p1 || !response.p2) {
            throw new Error("Atenção! Nome e idade são necessários!");
        }
        console.log(
            chalk.bgYellow.black(
                `Opa ${response.p1}, você tem ${response.p2} anos, correto?`
            )
        );
    })
    .catch((err) => {
        console.log(chalk.red(`${err.message}`));
    });
