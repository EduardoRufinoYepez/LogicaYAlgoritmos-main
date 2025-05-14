function encontrarParDeSuma(arreglo, sumaObjetivo) {
    let indicesSuma = [-1, -1];

    for (let i = 0; i < arreglo.length; i++) {
        for (let j = i + 1; j < arreglo.length; j++) {
            //console.log(`${arreglo[i]} + ${arreglo[j]} := ${arreglo[i] + arreglo[j]}`);
            if (arreglo[i] + arreglo[j] === sumaObjetivo) {
                //console.log(`La suma de ${arreglo[i]} + ${arreglo[j]} me da el valor buscado`);
                indicesSuma[0] = i;
                indicesSuma[1] = j;
                return indicesSuma;
            }
        }
    }

    return indicesSuma;
}

function imprimirIndicesYValores(arreglo, indicesSumaResultado, valorObjetivo) {
    console.log(`Valor objetivo: ${valorObjetivo}`);
    console.log(`Índices: ${indicesSumaResultado[0]} ${indicesSumaResultado[1]}`);
    console.log(`Valores: ${arreglo[indicesSumaResultado[0]]} ${arreglo[indicesSumaResultado[1]]}`);
}

let arreglo = [1, 3, 5, 7, 9, 10, 12, 13, 15, 20, 21, 22, 25, 27, 27];
let valorObjetivo;
let indicesSumaResultado;

valorObjetivo = 30;
indicesSumaResultado = encontrarParDeSuma(arreglo, valorObjetivo);
imprimirIndicesYValores(arreglo, indicesSumaResultado, valorObjetivo);

valorObjetivo = 28;
indicesSumaResultado = encontrarParDeSuma(arreglo, valorObjetivo);
imprimirIndicesYValores(arreglo, indicesSumaResultado, valorObjetivo);

valorObjetivo = 45;
indicesSumaResultado = encontrarParDeSuma(arreglo, valorObjetivo);
imprimirIndicesYValores(arreglo, indicesSumaResultado, valorObjetivo);

valorObjetivo = 55;
indicesSumaResultado = encontrarParDeSuma(arreglo, valorObjetivo);
imprimirIndicesYValores(arreglo, indicesSumaResultado, valorObjetivo);
