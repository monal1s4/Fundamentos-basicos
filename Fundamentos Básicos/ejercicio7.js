function obtenerNumerosImpares() {
    let impares = [];

    for (let i = 1; i <= 50; i += 2) {
        impares.push(i);
    }

    return impares;
}

console.log(obtenerNumerosImpares());