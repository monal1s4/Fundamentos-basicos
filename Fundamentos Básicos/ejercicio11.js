function obtenerMaxMinAvg(arr) {
    let max = arr[0];
    let min = arr[0];
    let suma = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
        suma += arr[i];
    }

    const avg = suma / arr.length;
    return [max, min, avg];
}
const array = [1, 5, 10, -2];
console.log(obtenerMaxMinAvg(array));