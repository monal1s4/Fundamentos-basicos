function encontrarNumeroMayor(arr) {
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
}
const array = [-3, 3, 5, 7];
console.log(encontrarNumeroMayor(array));