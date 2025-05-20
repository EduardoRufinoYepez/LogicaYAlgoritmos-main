const gifts = ["Muñeca", "Carro de juguete", "Rompecabezas", "Lego", "Pelota"];

function findGift(gifts, giftName, index = 0) {
    // Caso base 1: Fin del arreglo
    if (index === gifts.length) {
        return `${giftName} no está en la lista.`;
    }
    
    // Caso base 2: Regalo encontrado
    if (gifts[index] === giftName) {
        return `${giftName} está en la posición ${index}.`;
    }
    
    // Llamada recursiva (siguiente posición)
    return findGift(gifts, giftName, index + 1);
}