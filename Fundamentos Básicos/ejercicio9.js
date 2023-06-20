function reemplazarPorCuadrado(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] ** 2;
    }

    return arr;
}
const array = [1, 5, 10, -2];
console.log(reemplazarPorCuadrado(array));