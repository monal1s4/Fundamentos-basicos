function calcularPromedio(arr) {
    let suma = 0;

    for (let i = 0; i < arr.length; i++) {
        suma += arr[i];
    }

    const promedio = suma / arr.length;
    return promedio;
}
const array = [1, 3, 5, 7, 20];
console.log(calcularPromedio(array));