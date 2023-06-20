
function sumaArray(arr) {
    let suma = 0;

    for (let i = 0; i < arr.length; i++) {
        suma += arr[i];
    }

    return suma;
}
const array1 = [1, 2, 5];
console.log(sumaArray(array1));

const array2 = [-5, 2, 5, 12];
console.log(sumaArray(array2)); 