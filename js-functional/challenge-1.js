// somar(3)(4)(5)
function somar(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        }
    }
}

const resultadoSoma = somar(3)(4)(5);
console.log(resultadoSoma);

// calcular(3)(7)(fn)
function calcular(x) {
    return function(y) {
        return function(fn) {
            return fn(x, y);
        }
    }
}

function subtrair(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

const calculo1 = calcular(10)(5)(subtrair);
const calculo2 = calcular(10)(5)(multiplicar);
console.log(calculo1);
console.log(calculo2);