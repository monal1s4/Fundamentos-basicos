function sumaNumerosPares() {
    var suma = 0;
    for (var i = 1; i <= 1000; i++) {
        if (i % 2 === 0) {
            suma += i;
        }
    }
    return suma;
}
var resultado = sumaNumerosPares();
console.log(resultado);