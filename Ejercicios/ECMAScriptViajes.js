// viajes.js

// Array para guardar los destinos (usamos const porque no se reasignará)
const destinos = [];

// Función para registrar un destino de viaje (convertida a arrow function)
const registrarDestino = (destino, fecha, transporte) => {
    // Objeto con los datos del destino (usamos shorthand property names)
    const nuevoViaje = {
        destino,
        fecha,
        transporte,
        costo: calcularCosto(destino, transporte)
    };

    destinos.push(nuevoViaje);
};

// Función para calcular el costo del viaje (arrow function + template literals)
const calcularCosto = (destino, transporte) => {
    let costoBase = 0;

    // Usamos un objeto para los costos base (más escalable)
    const costosDestinos = {
        'Paris': 500,
        'Londres': 400,
        'New York': 600
    };

    // Costo base por destino (usamos operador ternario)
    costoBase = costosDestinos[destino] || 0;

    // Costo adicional por transporte (usamos switch)
    switch(transporte) {
        case "Avión":
            costoBase += 200;
            break;
        case "Tren":
            costoBase += 100;
            break;
        default:
            costoBase += 50;
    }

    return costoBase;
};

// Función para mostrar el itinerario (arrow function + for...of)
const mostrarItinerario = () => {
    // Usamos for...of en lugar del for tradicional
    for(const viaje of destinos) {
        console.log(`
        Destino: ${viaje.destino}
        Fecha: ${viaje.fecha}
        Transporte: ${viaje.transporte}
        Costo: $${viaje.costo}
        ---------------------------
        `);
    }
};

// Exportamos las funciones para poder usarlas en otros módulos
export { registrarDestino, calcularCosto, mostrarItinerario };