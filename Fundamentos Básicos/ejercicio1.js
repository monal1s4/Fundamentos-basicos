function obtenerNumeros() {
    var numeros = [];
    for (var i = 1; i <= 255; i++) {
        numeros.push(i);
    }
    return numeros;
}
var resultado = obtenerNumeros();
console.log(resultado);