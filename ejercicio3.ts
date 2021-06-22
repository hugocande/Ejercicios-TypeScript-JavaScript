//Ejercicio 3. Calcular el factorial de un número.

let numero:number = 10;
let solucion:number = 1;

//Usando un for:

for (let i = numero; i>1; i--){
    solucion = solucion * i;
}
console.log(solucion);


//Usando recursividad

function factorial (numero:number):number{
    if (numero>1){
        return factorial(numero-1)*numero;
    }
    else return numero;
}
console.log(factorial(numero));
