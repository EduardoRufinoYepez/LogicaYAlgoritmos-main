const productos = [
    { nombre: "Camiseta", precio: 15, categoria: "Ropa" },
    { nombre: "Laptop", precio: 800, categoria: "Electrónica" },
    { nombre: "Libro", precio: 12, categoria: "Educación" },
    { nombre: "Zapatos", precio: 50, categoria: "Ropa" },
    { nombre: "Celular", precio: 600, categoria: "Electrónica" },
];

// 1. Filtrar productos menores a $100
const productosBaratos = productos.filter(producto => producto.precio < 100);
console.log("Productos bajo $100:", productosBaratos);

// 2. Ordenar alfabéticamente
const productosOrdenados = productosBaratos.sort((a, b) => 
    a.nombre.localeCompare(b.nombre)
);
console.log("Productos ordenados:", productosOrdenados);

// 3. Mapear solo nombres
const nombresProductos = productosOrdenados.map(producto => producto.nombre);
console.log("Nombres de productos:", nombresProductos);

// Opcional: Calcular valor total de productos baratos usando reduce
const totalBaratos = productosBaratos.reduce((acumulador, producto) => 
    acumulador + producto.precio, 0
);
console.log("Valor total de productos baratos:", totalBaratos);

// Opcional: Verificar si hay productos de electrónica usando some
const hayElectronicos = productos.some(producto => 
    producto.categoria === "Electrónica"
);
console.log("¿Hay productos electrónicos?", hayElectronicos ? "Sí" : "No");