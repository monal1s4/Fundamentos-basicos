function intercambiarPrimerUltimo(arr) {
    const longitud = arr.length;

    if (longitud < 2) {
        return arr;
    }

    const primerValor = arr[0];
    arr[0] = arr[longitud - 1];
    arr[longitud - 1] = primerValor;

    return arr;
}
const array = [1, 5, 10, -2];
console.log(intercambiarPrimerUltimo(array));