/*EJERCICIO 5. 
Crea un programa que genere 10 números en orden aleatorio entre 1 y 10.
¡Los números no se pueden repetir!
El ejercicio consiste en conseguir los números del 1 al 10 pero en orden aleatorio.
Ejemplo de salida: 9 6 2 8 1 3 7 4 5 10
 */

const minimo:number = 1;
const maximo:number = 11;
let contenedor:number [] = []

function numeroRandom (minimo:number, maximo:number) {

    return Math.floor(Math.random() * (maximo - minimo)) + minimo;
}
let random:number = numeroRandom(minimo, maximo);
contenedor.push(random);
while (contenedor.length<10){


    if (contenedor.includes(random)){
        random = numeroRandom(minimo,maximo);
    }
    else contenedor.push(random);
}

for (let i = 0; i<contenedor.length;i++){
    console.log(contenedor[i]);
}
