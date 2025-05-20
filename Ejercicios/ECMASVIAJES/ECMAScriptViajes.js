// Array para guardar los destinos
export const destinos = [];

// Función para registrar un destino
export const registrarDestino = (destino, fecha, transporte) => {
    const nuevoViaje = {
        destino,
        fecha,
        transporte,
        costo: calcularCosto(destino, transporte)
    };
    destinos.push(nuevoViaje);
};

// Función para calcular costos
export const calcularCosto = (destino, transporte) => {
    const costosDestinos = { Paris: 500, Londres: 400, 'New York': 600 };
    let costoBase = costosDestinos[destino] || 0;
    
    const costosTransporte = { Avión: 200, Tren: 100, Barco: 50 };
    return costoBase + (costosTransporte[transporte] || 0);
};

// Función para mostrar itinerario
export const mostrarItinerario = () => {
    destinos.forEach(viaje => {
        console.log(`
            Destino: ${viaje.destino}
            Fecha: ${viaje.fecha}
            Transporte: ${viaje.transporte}
            Costo: $${viaje.costo}
        `);
    });
};