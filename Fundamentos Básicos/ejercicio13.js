function reemplazarNegativosPorDojo(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 'Dojo';
        }
    }

    return arr;
}
const array = [-1, -3, 2];
console.log(reemplazarNegativosPorDojo(array));