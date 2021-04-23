// arrow function
const felizNatal = () => console.log("Feliz Natal!");
felizNatal();

const saudacao = (nome) => `Olá, ${nome}!`;
// "Olá, " + nome + "!";
console.log(saudacao("Heloíse"));

const somar = (numeros) => {
    let total = 0;

    for(let n of numeros) {
        total += n;
    }

    return total;
}

console.log(somar([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));


const potencia = (base, exp) => Math.pow(base, exp);

const resultado = potencia(2, 3);
console.log(resultado);
// Ou
// const potencia = base => exp => Math.pow(base, exp);
// console.log(potencia(2)(10));
