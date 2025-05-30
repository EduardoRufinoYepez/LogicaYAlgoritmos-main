const fs = require('fs');

// Ruta del archivo de notas
const filePath = './notas.json';

/**
 * Agrega una nueva nota al archivo.
 * @param {string} titulo - El título de la nota.
 * @param {string} contenido - El contenido de la nota.
 */

    // PISTA: Aquí debes leer las notas existentes antes de agregar la nueva.
    // COMPLETAR: Usa fs.readFileSync para leer el archivo.

function agregarNota(titulo, contenido) {
let notas = [];
    if (fs.existsSync(filePath)) {
    const texto = fs.readFileSync(filePath, `utf8`);
    if(texto) {
        notas = JSON.parse(texto)
    }
}

const nuevaNota = { titulo, contenido };

if (notas.some(n => n.titulo === titulo)){
    console.log(`Ya existe una nota con el titulo: ${titulo}`);
    return;
}
    notas.push(nuevaNota);
  // PISTA: Ahora debes sobrescribir el archivo con las notas actualizadas.
  // COMPLETAR: Usa fs.writeFileSync para guardar las notas.
        fs.writeFileSync(filePath, JSON.stringify(notas,null, 2), `utf8`);
    console.log('Nota agregada con éxito.');
}

/**
 * Lista todas las notas guardadas.
 */
function listarNotas() {
    if (fs.existsSync(filePath)) {
    // PISTA: Debes leer y parsear el contenido del archivo.
    // COMPLETAR: Usa fs.readFileSync para leer y JSON.parse para convertir el contenido.
    const texto = fs.readFileSync (filePath, `utf8`);

    if(texto) {
        const notas = JSON.parse(texto);

        if(notas.length > 0){
            console.log(`Listados de notas:`);
            notas.forEach((nota, i) => {
                console.log(`${i + 1}. [${nota.titulo}] ${nota.contenido}`);
            })
        } else {
            console.log(`No hay notas guardadas`);
        }
    }else{
        console.log(`El archivo de notas esta vacío`)
    }
        } else {
    console.log('No hay notas guardadas.');
    }
}

/**
 * Elimina una nota por su título.
 * @param {string} titulo - El título de la nota a eliminar.
 */

function eliminarNota(titulo) {
  if (!fs.existsSync(filePath)) {
    console.log(`No hay notas para eliminar.`)
    return;
}
    // PISTA: Primero lee todas las notas.
    // COMPLETAR: Usa fs.readFileSync para leer el archivo.
    // PISTA: Filtra las notas y elimina la que coincida con el título.
    // COMPLETAR: Usa Array.filter para obtener las notas restantes.
    const texto = fs.readFileSync(filePath, `utf8`);
    if (!texto){
        console.log (`El archivo de notas esta vacío`);
        return;}

        const notas = JSON.parse(texto);
        const notasRestantes = notas.filter( nota => nota.titulo !== titulo);
        if(notasRestantes.length < notas.length){
            fs.writeFileSync(filePath,JSON.stringify(notasRestantes,null, 2),`utf8`);
            console.log(`Nota con título "${titulo}" eliminada.`)
        } else {
            console.log(`No se encontro ninguna nota con el titulo "${titulo}"`);     
        }
}

// Ejecución de ejemplo
agregarNota('Compras', 'Comprar leche y pan.');
listarNotas();
//eliminarNota(`Compras`);
//listarNotas();
agregarNota(`Encargo`, `Comprar Agua y Líquidos`);
listarNotas();
eliminarNota('Encargo');
listarNotas();
agregarNota('Compras', `Comprar leche y pan.`);
listarNotas();

// ### Pistas para Resolver el Proyecto ###
// Formato del archivo `notas.json`:
[
{ "titulo": "Compras", "contenido": "Comprar leche y pan." },
{ "titulo": "Trabajo", "contenido": "Terminar reporte semanal." }
]


// #### Operaciones clave: ###
// 1. Para leer las notas existentes:
//const data = fs.readFileSync(filePath, 'utf8');
//const notas = JSON.parse(data);

// 2. Para guardar las notas actualizadas:
//fs.writeFileSync(filePath, JSON.stringify(notas, null, 2));

// 3. Filtrar notas para eliminar:
//const notasRestantes = notas.filter((nota) => nota.titulo !== titulo);