// É possível uma função retornar outra função
// Técnica curring
function finalPrice(tax) {
    return function(price) {
        return price * (1 + tax);
    }
}

const nycFinalPrice = finalPrice(0.0875) // Declarando o imposto apenas uma vez

console.log(nycFinalPrice(25.1)); // Declaramos apenas o preço, pois o imposto foi declarado anteriormente
console.log(nycFinalPrice(21.7));
console.log(nycFinalPrice(107.9));