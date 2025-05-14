function encontrarParDeSuma(arreglo, sumaObjetivo){
    for(let i = 0; 1 < arreglo.length; i++){
        for(let j = i + 1; j < arreglo.length; j++){
            console.log(`${arreglo[i]} + ${arreglo[j]} = ${arreglo[i] + arreglo[j]}`);
        }
    }
}

let arreglo = [1, 2, 5, 7, 9, 10, 12 ,13, 15 , 20, 21, 22, 25 ,27, 27];
let sumaObjetivo = 30;
encontrarParDeSuma(arreglo, sumaObjetivo);