function sumaNumerosImpares() {
    let suma = 0;

    for (let i = 1; i <= 5000; i += 2) {
        suma += i;
    }

    return suma;
}

console.log(sumaNumerosImpares());