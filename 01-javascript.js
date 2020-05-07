{
    NOMBRE : {
        KE : {
        }
    }
}

// TIPO DE DATOS (NÚMERO), STRING, BOOL 
// VAR - CONST -> 
var   json   =   {
    nombre : 'kevin' ,
    edad : 20 ,
    soltero : verdad ,
    fecha : nueva  Fecha ( '1995/02/24' ) ,
}

consola . log ( json . nombre )
consola . log ( json [ 'edad' ] )

JSON . nombre   =   'nuevo'

JSON . direccion   =   'solanda'

consola . log  ( json )

eliminar  json . direccion

consola . log ( json )

/ *
console.error ()
console.info ()
console.warn ()
* / 
var   json2   =   {
    nombre : 'kevin' ,
    edad : 20 ,
    soltero : verdad ,
    fecha : nueva  Fecha ( '1995/02/24' ) ,
    interese :
    {
        aficiones : [
          'futbol' ,
          'ps4'
        ] ,
        peliculas : [
            {
                nombre : '' ,
                tipo : '' ,
                esBuena : cierto ,
            } ,
            {
                nombre : '' ,
                tipo : '' ,
                esBuena : cierto ,
            }
        ]
    } ,
    familia : [
        {
            nombre : '' ,
            edad : 1 ,
        } ,
        {
            nombre : '' ,
            edad : 1 ,
        }
    ]
}
// stringify 

var  json2String  =  JSON . stringify ( json2 )
consola . log ( json2 )
consola . log ( json2String )

//Analizar gramaticalmente

var  jsonParse  =  JSON . analizar ( json2String )
consola . log ( jsonParse )