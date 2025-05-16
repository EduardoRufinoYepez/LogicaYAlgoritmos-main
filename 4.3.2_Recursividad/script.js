function factorial(x) {
    if (x === 1) return 1;
    return x * factorial(x - 1);
}

let factorialACalcular = 10;
console.log(`El factorial de ${factorialACalcular} es ${factorial(factorialACalcular)}`);

/*
    Crear una función que me permita encontrar la salida de un laberinto.

    Reglas del labetrinto:
    1. los valores 1 son paredes
    2. los valores 0 son caminos
    3. El valor 2 es la entrada
    4. El valor 3 es la salida
    5. Solamente se puede avanzar en las direcciones: Arriba, Abajo, Izquierda y Derecha
    6. Solamente podemos avanzar de 1 en 1
    7. no tiene ciclos
*/

const laberinto = [
        [1, 1, 1, 1, 1, 1], // 0
        [2, 0, 0, 1, 0, 3], // 1
        [1, 1, 0, 1, 0, 1], // 2
        [1, 1, 0, 0, 0, 1], // 3
        [1, 1, 0, 1, 0, 1], // 4
        [1, 1, 0, 1, 0, 1], // 5
        [1, 1, 1, 1, 1, 1]  // 6
]

function avanzar(fila, columna, laberinto){
console.log(`[${fila}, ${columna}]`);

    if(
        fila < 0 || fila >= laberinto.length ||
        columna < 0 || columna >= laberinto[0].length ||
        laberinto[fila][columna] === 1
    ){
        console.log("No se puede avanzar por aqui...");
        return ;
    }

    if(laberinto[fila][columna] === 3){
        console.log("Salida encontrada!!");
        return ;
    }

    laberinto[fila][columna] = 1; // Marcar como visitado

    avanzar(fila - 1, columna, laberinto); // Arriba
    avanzar(fila + 1, columna, laberinto); // Abajo
    avanzar(fila, columna - 1, laberinto); // Izquierda
    avanzar(fila, columna + 1, laberinto); // Derecha

    laberinto[fila][columna] = 0; // Desmarcar como visitado

    console.log( 'Aqui ya no hay mas camino por recorrer')

}
