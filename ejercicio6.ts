/*Ejercicio 6
Parte 1: Crea un programa que compruebe si una letra existe en un texto.
Parte 2: Crea una variable de tipo string que contenga un texto.
Crea una variable de tipo string que contenga una letra.
Comrpueba si la letra existe dentro del String.
 */

//Parte 1
let texto:string = "Hola mundo";

let exist:boolean = texto.includes("e");

if (exist) console.log("La letra existe en el texto.")
else console.log("La letra no existe en el texto.")

//Parte 2
texto = "Hola Mundo, parte 2"
let letra:string = "a";

exist = texto.includes(letra);

if (exist) console.log("La letra existe en el texto de la parte 2.")
else console.log("La letra no existe en la parte 2.")
