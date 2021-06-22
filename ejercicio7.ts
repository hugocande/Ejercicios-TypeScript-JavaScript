/*Ejercicio 7
Crea un programa que nos diga los números primos entre 1 y 500
 */

function esPrimo(numero:number){
    for (let i = 2; i<=Math.sqrt(numero);i++){
        if(numero%i === 0){
            return false;
        }
    }
    if (numero === 1) return false;
    else return true;
}

let numerosPrimos:number [] = [];
for (let i = 1; i<=500; i++){
    if (esPrimo(i)){
        numerosPrimos.push(i);
    }
}
console.log(numerosPrimos);
