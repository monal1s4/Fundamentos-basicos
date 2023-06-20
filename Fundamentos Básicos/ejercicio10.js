function reemplazarNegativosPorCero(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 0;
        }
    }

    return arr;
}
const array = [1, 5, 10, -2];
console.log(reemplazarNegativosPorCero(array));