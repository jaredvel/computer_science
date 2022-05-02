const matrizA = [
    [2,0,1],
    [3,2,0],
    [5,4,1],
];

const matrizB = [
    [4,0,3],
    [1,2,7],
    [4,5,0],
];

const matrizResultado = [
    [0,0,0],
    [0,0,0],
    [0,0,0],
];

const matrizResultado2 = [
    [0,0,0],
    [0,0,0],
    [0,0,0],
];

    []

console.log("matrizA =>", matrizA);
console.log("matrizB =>", matrizB);

for (var fila = 0; fila < matrizResultado.length; fila++) {
    for (var columna = 0; columna < matrizResultado.length; columna++) {
        //console.log(matrizB[fila][columna]);
        matrizResultado[fila][columna] = matrizA[fila][columna] + matrizB[fila][columna]
    }
}

for (var fila = 0; fila < 3; fila++) {
    for (var columna = 0; columna < 3; columna++) {
        //console.log(matrizB[fila][columna]);
        matrizResultado2[fila][columna] = matrizA[fila][columna] - matrizB[fila][columna]
    }
}

console.log("matrizResultado =>", matrizResultado);
console.log("matrizResultado2 =>", matrizResultado2);
