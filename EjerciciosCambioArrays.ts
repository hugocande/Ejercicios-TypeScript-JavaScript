let listaCompra: string[] = [];
listaCompra.push("pan rústico");
listaCompra.push("pizza barbacoa");
listaCompra.push("Salmón");
listaCompra.push("Servilletas");
listaCompra.push("Fruta");
listaCompra.push("Agua");

//Recorrer una lista

for (let i = 0; i<listaCompra.length;i++){
    console.log(`Comprar producto ${i+1}: ${listaCompra[i]}`);
}

//Eliminar el último elemento. Función pop()

let elementoEliminado:string|undefined = listaCompra.pop();
console.log(`Último elemento eliminado: ${elementoEliminado}`);

//Eliminar el primer elemento. Función shift()

let primerElemento:string|undefined = listaCompra.shift();
console.log(`Primer elemento eliminado: ${primerElemento}`);

//Eliminar un elemento en concreto con la función splice()

console.log(`Elemento eliminado: ${listaCompra.splice(2,1)}`);

//Filtrar la lista obteniendo los elemento que tengan más de 2 palabras.

function filtrar (item:string) {
    return item.split(' ').length>1
}
let nuevaLista = listaCompra.filter(filtrar);
for (let i = 0; i<nuevaLista.length;i++){
    console.log(`Lista filtrada: ${nuevaLista[i]}`);
}

//Recuperar una lista con los 3 primeros elementos. Función slice()
let primerosElementos = listaCompra.slice(0,3)
for (let i = 0; i<primerosElementos.length;i++){
    console.log(`Elemento ${i}: ${primerosElementos[i]}`);
}

//Girar la lista. Función reverse()
let listaGirada = listaCompra.reverse();
for (let i = 0; i<listaGirada.length;i++){
    console.log(`Lista girada ${i}: ${listaGirada[i]}`);
}

//Comprobar si un elemento existe en la lista. Función includes(). Devuelve un booleano.

let exist = listaCompra.includes("pizza barbacoa");
if (exist) console.log("Existe");
else console.log("No existe");

//Mostrar la lista después de los cambios.

for (let i = 0; i<listaCompra.length; i++){
    console.log(`Comprar producto ${i+1}: ${listaCompra[i]}`);
}