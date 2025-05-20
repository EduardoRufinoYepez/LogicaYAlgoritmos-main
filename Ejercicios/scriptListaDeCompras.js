// Lista de compras (arreglo)
const listaDeCompras = [];

// Función para agregar productos (evita duplicados)
const agregarProducto = (producto) => {
    const productoNormalizado = producto.toLowerCase();
    
    // Verificar si el producto ya existe (case-insensitive)
    const existe = listaDeCompras.some(item => 
        item.toLowerCase() === productoNormalizado
    );
    
    if (!existe) {
        listaDeCompras.push(producto);
        console.log(`✅ "${producto}" agregado a la lista.`);
    } else {
        console.log(`❌ "${producto}" ya está en la lista.`);
    }
};

// Función para eliminar productos
const eliminarProducto = (producto) => {
    const indice = listaDeCompras.findIndex(item => 
        item.toLowerCase() === producto.toLowerCase()
    );
    
    if (indice !== -1) {
        const eliminado = listaDeCompras.splice(indice, 1)[0];
        console.log(`🗑️ "${eliminado}" eliminado.`);
    } else {
        console.log(`⚠️ "${producto}" no encontrado en la lista.`);
    }
};

// Función para mostrar la lista
const mostrarLista = () => {
    if (listaDeCompras.length === 0) {
        console.log("Tu lista de compras está vacía.");
        return;
    }
    
    console.log("🛒 Lista de Compras:");
    listaDeCompras.forEach((producto, index) => {
        console.log(`${index + 1}. ${producto}`);
    });
};

// --- Ejemplo de uso ---
agregarProducto("Manzanas");     // ✅
agregarProducto("manzanas");     // ❌ (duplicado)
agregarProducto("Leche");        // ✅
agregarProducto("Pan integral"); // ✅

mostrarLista();
/*
🛒 Lista de Compras:
1. Manzanas
2. Leche
3. Pan integral
*/

eliminarProducto("leche");       // 🗑️ "Leche" eliminado
eliminarProducto("Queso");       // ⚠️ no encontrado

mostrarLista();
/*
🛒 Lista de Compras:
1. Manzanas
2. Pan integral
*/