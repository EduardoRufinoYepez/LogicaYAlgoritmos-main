import { 
    destinos, 
    registrarDestino, 
    mostrarItinerario 
} from './viajes.js';

// Función para simular interacción con el usuario
const iniciarApp = () => {
    // Ejemplo de datos (podrían venir de un formulario)
    registrarDestino("Paris", "2024-06-15", "Avión");
    registrarDestino("Londres", "2024-07-01", "Tren");
    
    // Mostrar resultados
    console.log("=== Itinerario de Viajes ===");
    mostrarItinerario();
    
    // Calcular total
    const total = destinos.reduce((sum, viaje) => sum + viaje.costo, 0);
    console.log(`Costo total: $${total}`);
};

// Ejecutar
iniciarApp();