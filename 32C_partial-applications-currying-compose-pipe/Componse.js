const compose = (...funcs) => (x) => funcs.reduceRight((v, f) => f(v), x);

const formatearTexto = (texto) => texto.toUpperCase();
const agregarSufijo = (texto) => texto + ' - Finalizado';

const formatearYAgregarSufijo = compose(agregarSufijo, formatearTexto);

const textoOriginal = 'Hola Mundo';
const resultado = formatearYAgregarSufijo(textoOriginal);
console.log(resultado);