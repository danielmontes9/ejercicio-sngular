//* FUNCION QUE RETORNA EL DIGITO N DE LA SERIE FIBONACCI
export function fibonacci(n: number) {
    let a = 0;
    let b = 1;
    let temp;

    if (n === 0) return a;
    if (n === 1) return b;

    for (let i = 2; i <= n; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }

    return b;
}


//* FUNCION QUE RETORNA EL DIGITO N DE LOS NUMEROS TRIANGULARES
export function triangular(n: number) {
    if (n <= 0) return 0;
    return (n * (n + 1)) / 2;
}


//* FUNCION QUE RETORNA EL DIGITO N DE LOS NUMEROS PRIMOS
export function nthPrimo(n) {
    if (n === 1) return 2; // El primer número primo es 2
    let count = 1;
    let numero = 3; // Comenzamos desde el segundo número primo, que es 3

    while (count < n) {
        if (esPrimo(numero)) {
            count++;
        }
        if (count === n) {
            return numero;
        }
        numero += 2; // Solo consideramos números impares como primos
    }

    return -1; // Retornar -1 si no se encuentra el término n
}

//* FUNCION PARA DETERMINAR SI UN NUMERO ES PRIMO
function esPrimo(numero) {
    if (numero <= 1) return false;
    if (numero <= 3) return true;

    if (numero % 2 === 0 || numero % 3 === 0) return false;

    let i = 5;
    while (i * i <= numero) {
        if (numero % i === 0 || numero % (i + 2) === 0) return false;
        i += 6;
    }

    return true;
}