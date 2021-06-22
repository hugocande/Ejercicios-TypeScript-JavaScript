//Ejercicio 2. Introducir un texto y convertirlo a código MORSE

/*Función toMorse:
       Recorre el texto con un foreach.
       A continuación elimina las tildes que pueda haber.
       A la variable letraMorse se le asigna el valor de la clave del Mapa.

 */

function toMorse(texto:string){
        [...texto].forEach((letra:string)=>{
            letra = eliminarTildes(letra);
            let letraMorse = morse.get(letra.toLowerCase());
            process.stdout.write(letraMorse === undefined?'   ':letraMorse);
          
/* Función eliminarTildes
        Si se encuentra una letra con tilde, la reemplaza por la letra sin ésta.
 */
function eliminarTildes(letra:string):string{

    switch(letra){
        case 'á':
            return 'a'
        case 'é':
            return 'e'
        case 'í':
            return 'i'
        case 'ó':
            return 'o'
        case 'ú':
            return 'u'
        default:
            return letra;
    }

}

// Mapa clave,valor con el diccionario Morse.

let morse: Map<string,string> = new Map<string,string>()
morse.set('a', '.-');
morse.set('b','-...');
morse.set('c','-.-.');
morse.set('d','-..');
morse.set('e','.');
morse.set('f','..-.');
morse.set('g','--.');
morse.set('h','....');
morse.set('i','..');
morse.set('j','.---');
morse.set('k','-.-');
morse.set('l','.-..');
morse.set('m','--');
morse.set('n','-.');
morse.set('o','---');
morse.set('p','.--.');
morse.set('q','--.-');
morse.set('r','.-.');
morse.set('s','...');
morse.set('t','-');
morse.set('u','..-');
morse.set('v','...-');
morse.set('w','.--');
morse.set('x','-..-');
morse.set('y','-.--');
morse.set('z','--..');

let texto = "Esto es una prueba."

toMorse(texto);

export{}
