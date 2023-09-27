const duplicar = (x) => x * 2;
const restar5 = (x) => x - 5;
const elevarAlCuadrado = (x) => x ** 2;

const numero = 7;

const resultado = elevarAlCuadrado(restar5(duplicar(numero)));

console.log(resultado);