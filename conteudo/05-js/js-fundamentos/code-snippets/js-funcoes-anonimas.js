//  Função tradicional:
function calcularIMC(peso, altura) {
    let imc = 0;
    if (peso > 0 && altura > 0) {
        imc = peso / (altura ** 2);
    }
    return imc;
}
let imc = calcularIMC(67, 1.73);
console.log(imc.toFixed(1));

// Função Anônima (função que não possui um nome):
const calcularImc = (peso, altura) => {
    let imc = 0;
    if (peso > 0 && altura > 0) {
        imc = peso / (altura ** 2);
    }
    return imc;
}
console.log(calcularImc(67, 1.73).toFixed(1));

//
const incrementar = (num) => {
    return num + 1;
}
console.log(incrementar(3));

const incrementar = num => {
    return num + 1;
}
console.log(incrementar(3));

const incrementar = num => num + 1;
console.log(incrementar(3));

const pi = () => 3.1416;
console.log(pi());

//
(function () {
    var now = new Date();
    var time = ("0" + now.getHours()).slice(-2) + ":" +
        ("0" + now.getMinutes()).slice(-2) + ":" +
        ("0" + now.getSeconds()).slice(-2);
    console.log(time);
})();
