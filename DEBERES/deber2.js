//DEBER 1: Inveritr la  PALABRA='COMERCIO ELECTRONICO'
/* FORMA 1
var nombre = 'COMERCIO ELECTRONICO'
console.log(nombre.replace('COMERCIO ELECTRONICO','OCINORTCELE OICREMOC'))
*/
// FORMA 2: MANERA GENERICA
const invertirCadena = cadena => cadena
//CONVERTIR UNA CADENA A UN ARREGLO CON SPLIT
//INVERTIR DICHO ARREGLO CON METODO REVERSE
.split("").reverse() 
//VOLVER A CADENA UNIDOS EL CON JOIN
.join(""); //si borro las comillas no invierte palabra
let cadena = "COMERCIO ELECTRONICO";
console.log("PALABRA INVERTIDA:", invertirCadena(cadena));
/*
//EJEMPLOS
var text = 'COMERCIO'
console.log(text.replace('COMERCIO')) 
//SI SE BORRA EL PRIMERO DE ESTAS EXPRESIONES CARGA TAL CUAL LA PALABRA
//SI SE BORRA EL SEGUNDO DE ESTAS EXPRESIONES DA 'undefined' 
var text1 = 'KEVIN MASABANDA'
console.log(text1.replace('KEVIN MASABANDA','ADNABASAM NIVEK')) 
*/



//DEBER 2
//A) PRIMERA PALABRA EN MAYUSCULAS 

var TEXTO = 
'Realiza fotografías de 20 megapíxeles y'
'puede utilizar un perfil de color Dlog-M'
'de 10 bits, con el que se obtiene un rango'
'dinámico más amplio al registrar hasta mil millones de'
'colores. Esto queda bastante por encima de los 16 millones de'
'colores de los perfiles de 8 bits, pudiendo dejar más margen y'
'libertad en la edición posterior del material.'
'Por su parte, el Mavic 2 Zoom cuenta con'
'un sensor CMOS de 1/2,3 pulgadas y zoom óptico, lo cual da nombre al propio producto.'
'En este caso es capaz de realizar capturas de 12 megapíxeles,'
'disponiendo un zoom automático híbrido (que combina detección de fase y contraste)'
'de una función de "Superresolución" que recurre al zoom óptico para realizar nueve'
'fotografías y componer una sola con todas ellas de 48 megapíxeles (con más detalle).'

TEXTO = MayusculaPrimera(TEXTO //si borro da error
    //PARA PONER EN MAYUSCULAS 
    //SI PONGO .toLowerCase CAMBIA A MINUSCULAS
    .toUpperCase()); 
    //string y text imprimen la palabra
    //si borro string se da error
    //STRING: para linea de caracteres
function MayusculaPrimera(string){
    return string
    //si borro el 0 no pasa nada 
    //el 0 es la posicion desde donde va a empesar 
    .charAt(0)
    //en mayusculas llamo a la palabra
    .toUpperCase() + string
    //la posicion de la palabra
    //si coloco 8 u otro valor, va a esa posicion que es espacio, sino va a la letra correspondiente en mayusculas
    //con esto controlo que palabra necesito usando su posicion  
    .slice(1,7);
  };
 
//B) PALABRA MITAD EN MAYUSCULAS:Zoom
//de manera automatizada, sin posiciones
  var mitad = 'Zoom'
  mitad = MayusculaMitad(mitad
    //.toLowerCase(''));  para poner la palabra en minuscula
    .toUpperCase('')); 
function MayusculaMitad(mitad){
    return mitad
  }
  
//C)ULTIMA PALABRA MITAD EN MAYUSCULAS:Zoom
var ultima = 'detalle'
  ultima = MayusculaMitad(ultima
    .toUpperCase('')); 
function MayusculaMitad(ultima){
    return ultima
  }
 // console.log(`PRIMERA PALABRA MAYUSCULA: ${TEXTO}`)
 // console.log(`PALABRA DE LA MITAD MAYUSCULA: ${mitad}`)
  //console.log(`ULTIMA PALABRA MAYUSCULA: ${ultima}`)


//D) SUMAR TODOS LOS PUNTOS 
function sumaPuntos(puntos) {
    let todosPuntos = '.';
    let pCounter = 0;
    for(let i = 0; i < puntos.length; i++) {
      if(todosPuntos.indexOf(puntos[i]) !== -1) {
        //console.log("SUMA DE PUNTOS = " + puntos[i]);
        pCounter += 1;
      }   
    }
    return pCounter;
  }
  //E) SUMA TOTAL DE COMAS
  function sumaComas(string) {
      //variable donde se guardaran los.
    let todasComas = ',';
    //contador de puntos desde 0
    let cCounter = 0;
    //bucle for para iterar sobre cada elemento del string
    for(let i = 0; i < string.length; i++) {
        //con indexOf encuentro la posicion de un caracter dentro de una cadena de texto 
      if(todasComas.indexOf(string[i]) !== -1) {
        cCounter += 1; //va a ir sumando la cantidad
      }   
    }
    return cCounter; //retorna cantidad de comas
  }
  
console.log(`PRIMERA PALABRA MAYUSCULA: ${TEXTO}`)
console.log(`PALABRA DE LA MITAD MAYUSCULA: ${mitad}`)
console.log(`ULTIMA PALABRA MAYUSCULA: ${ultima}`)
console.log(`SUMA TOTAL DE PUNTOS:`, sumaPuntos("Realiza fotografías de 20 megapíxeles y n\
puede utilizar un perfil de color Dlog-M n\
de 10 bits, con el que se obtiene un rango n\
dinámico más amplio al registrar hasta mil millones de n\
colores. Esto queda bastante por encima de los 16 millones de n\
colores de los perfiles de 8 bits, pudiendo dejar más margen y n\
libertad en la edición posterior del material. n\
Por su parte, el Mavic 2 Zoom cuenta con n\
un sensor CMOS de 1/2,3 pulgadas y zoom óptico, lo cual da nombre al propio producto. n\
En este caso es capaz de realizar capturas de 12 megapíxeles, n\
disponiendo un zoom automático híbrido (que combina detección de fase y contraste) n\
de una función de Superresolución que recurre al zoom óptico para realizar nueve n\
fotografías y componer una sola con todas ellas de 48 megapíxeles (con más detalle)."));

console.log(`SUMA TOTAL DE COMAS:`, sumaComas("Realiza fotografías de 20 megapíxeles y n\
puede utilizar un perfil de color Dlog-M n\
de 10 bits, con el que se obtiene un rango n\
dinámico más amplio al registrar hasta mil millones de n\
colores. Esto queda bastante por encima de los 16 millones de n\
colores de los perfiles de 8 bits, pudiendo dejar más margen y n\
libertad en la edición posterior del material. n\
Por su parte, el Mavic 2 Zoom cuenta con n\
un sensor CMOS de 1/2,3 pulgadas y zoom óptico, lo cual da nombre al propio producto. n\
En este caso es capaz de realizar capturas de 12 megapíxeles, n\
disponiendo un zoom automático híbrido (que combina detección de fase y contraste) n\
de una función de Superresolución que recurre al zoom óptico para realizar nueve n\
fotografías y componer una sola con todas ellas de 48 megapíxeles (con más detalle)."));


