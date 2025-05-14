function encontrarParInvitados(invitados) {
    for (let i = 0; i < invitados.length - 1; i++) {
        const nombreActual = invitados[i];
        const nombreSiguiente = invitados[i + 1];
        
        // Obtenemos la primera letra de cada nombre (en minúscula para comparación insensible a mayúsculas)
        const letraActual = nombreActual.charAt(0).toLowerCase();
        const letraSiguiente = nombreSiguiente.charAt(0).toLowerCase();
        
        if (letraActual === letraSiguiente) {
            return [nombreActual, nombreSiguiente];
        }
    }
    
    return null; // Si no se encuentra ningún par
}

// Ejemplo de uso:
const listaInvitados = ["Ana", "Andrés", "Carlos", "Clara", "Eva", "Juan", "Pedro"];
const parEncontrado = encontrarParInvitados(listaInvitados);

if (parEncontrado) {
    console.log(`El primer par de invitados que pueden sentarse juntos es: ${parEncontrado[0]} y ${parEncontrado[1]}`);
} else {
    console.log("No se encontraron invitados consecutivos que comiencen con la misma letra.");
}