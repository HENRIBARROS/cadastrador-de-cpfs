const CPF = require('cpf');
const fs = require("fs");

// imprime uma mensagem de boas vindas
console.log("Seja bem vindo ao cadastrador de CPFs");

// 1 - Capturar o CPF digitado pelo usuario
const cpf = process.argv[2];

// 2 - Validar o CPF...
let cpfvalido = CPF.isValid(cpf);

// 3 - Caso a informaçao seja um CPF valido, salvar no arquivo dados.txt
// caso contrario, exibir mensagem de erro:
if(cpfvalido){
console.log("CPF Válido! Salvando...");
fs.writeFileSync("dados.txt", cpf + "\n", {flag: 'a'});
} else {
console.log("CPF Inválido! Digite Novamente.")
}

console.log("FIM");