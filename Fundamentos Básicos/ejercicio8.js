function contarMayoresQueY(arr, Y) {
    let contador = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > Y) {
            contador++;
        }
    }

    return contador;
}
const array = [1, 3, 5, 7];
const Y = 3;
console.log(contarMayoresQueY(array, Y));