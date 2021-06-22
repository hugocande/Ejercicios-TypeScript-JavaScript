/*Ejercicio 1 ¡DIFÍCIL!
En este ejercicio vamos a realizar un proyecto de dificultad avanzada.
¿Qué queremos realizar?
Nos ha contratado una empresa de transportes, la cual tiene unas necesidades especiales.
Debe de rellenar sus camiones de la forma más óptima posible, pero por seguridad no puede apilar
unas cajas encima de otras.
Para llenar el camión debemos sacar una lista ordenada de cajas de la más pequeña a la más grande.
Si dos cajas tienen el mismo tamaño solo podemos colocar la primera de ellas.
Este algoritmo se debe repetir tantas veces como sea necesario hasta que todas las cajas queden asignadas
a un camión.
Pasos a realizar:
    - Diseñar la interfaz caja, la cual tiene 2 atributos, "contenido" y "altura.
    - Crear una lista de cajas de diferentes alturas.
    - Crear una función que reciba estas cajas.
    - Ordenar las cajas y sacar el resultado final por pantalla.
 */

interface Caja {
    contenido:string;
    altura:number;
}

let caja1:Caja = {contenido: "PlayStation1", altura: 60}
let caja2:Caja = {contenido: "PlayStation2", altura: 65}
let caja3:Caja = {contenido: "PlayStation3", altura: 30}
let caja4:Caja = {contenido: "PlayStation4", altura: 55}
let caja5:Caja = {contenido: "PlayStation4", altura: 55}
let caja6:Caja = {contenido: "PlayStation5", altura: 85}
let caja7:Caja = {contenido: "PlayStation5", altura: 85}
let caja8:Caja = {contenido: "PlayStation5", altura: 85}
let caja9:Caja = {contenido: "PlayStation5", altura: 85}
let caja10:Caja = {contenido: "Macbook Air", altura: 30}
let caja11:Caja = {contenido: "Macbook Pro", altura: 40}
let caja12:Caja = {contenido: "Macbook Pro", altura: 40}
let caja13:Caja = {contenido: "Bicicleta", altura: 140}
let caja14:Caja = {contenido: "Bicicleta", altura: 140}
let caja15:Caja = {contenido: "Jaula Crossfit", altura: 200}

let alturas:number [] = [];
alturas.push(caja1.altura);
alturas.push(caja2.altura);
alturas.push(caja3.altura);
alturas.push(caja4.altura);
alturas.push(caja5.altura);
alturas.push(caja6.altura);
alturas.push(caja7.altura);
alturas.push(caja8.altura);
alturas.push(caja9.altura);
alturas.push(caja10.altura);
alturas.push(caja11.altura);
alturas.push(caja12.altura);
alturas.push(caja13.altura);
alturas.push(caja14.altura);
alturas.push(caja15.altura);

for (let i = 0; i<alturas.length;i++){
    for(let j = 0; j<alturas.length-1;j++){
        if(alturas[j]<alturas[j+1]){
            let auxiliar = alturas[j+1];
            alturas[j+1] = alturas[j];
            alturas[j] = auxiliar;
        }
    }
}

alturas.reverse();
console.log(alturas);


function cajasRecursivo (alturas:number[]){

    let camion:number[] = [];
    camion.push(alturas[0]);
    let aux:number[] = [];

    for(let i = 0; i<alturas.length-1;i++) {
        if (alturas[i + 1] > alturas[i]) {
            camion.push(alturas[i + 1])
        } if (alturas[i+1] === alturas[i]) {
            aux.push(alturas[i + 1]);
        }
    }
        console.log(`Éste camión lleva las cajas: ${camion}`);
        if (aux.length>0){
            cajasRecursivo(aux);
        }



}
console.log(cajasRecursivo(alturas));










