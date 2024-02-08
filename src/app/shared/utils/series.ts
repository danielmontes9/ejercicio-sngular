

// FUNCION QUE RETORNA EL DIGITO N DE LA SERIE FIBONACCI
function fibonacci(n: number) {
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


function triangular(n: number) {
    return n;
}


function primo(n: number) {
    return n;
}