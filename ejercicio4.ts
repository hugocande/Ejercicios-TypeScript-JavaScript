/*EJERCICIO 4.
Crea un programa que genere 20 números aleatorios entre 0 y 10 y los guarde en un array,
Una vez creados, calcular la media de los números del array.
Si la media es superior a 5, mostrar un mensaje con Aprobado.
En caso contrario, mostrar un mensaje con Suspenso.
 */

const minimo:number = 0;
const maximo:number = 11;
let contador:number = 0;

function numeroRandom (minimo:number, maximo:number){

    return Math.floor(Math.random() * (maximo-minimo))+minimo;
}

let notas:number [] = [];

for (let i = 0; i<20;i++){
    notas.push(numeroRandom(minimo,maximo));
}

for (let i = 0; i<notas.length;i++){
    contador = contador + notas[i];
}

console.log(notas);
console.log(`la media es: ${contador/notas.length}`);

if (contador/notas.length >5){
    console.log("El alumno ha Aprobado");
}
else console.log("El alumno ha suspendido");




