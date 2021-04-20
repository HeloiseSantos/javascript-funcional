// RESUMO - BÁSICO SOBRE FUNÇÃO #01

// Function declaration - utiliza a palavra function para declará-la, possui um nome, parâmetros e instruções do que será executado em seu corpo
function bomDia() {
    console.log("Bom dia!");
}
bomDia();

// Function expression - a função será armazenada e tratada dentro de uma variável. Normalmente é utilizada uma função anônima
const boaTarde = function () {
    console.log("Boa tarde!");
}
boaTarde();

// Utilizando o return
function sum(a, b) {
    return a + b;
}
const result = sum(3, 4);
console.log(result);