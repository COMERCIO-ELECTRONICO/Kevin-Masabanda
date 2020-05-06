{
    NOMBRE: {
        KE: {
        }
    }
}

// TIPO DE DATOS (NÚMERO), STRING, BOOL 
// VAR - CONST -> 
var  json  =  {
    nombre:'kevin',
    edad:20,
    soltero: true,
    fecha: new Date('1995/02/24'),
}

consola.log(json.nombre)
consola.log(json['edad'])

JSON.nombre  =  'nuevo'

JSON.direccion  =  'solanda'

console.log (json)

delete json.direccion

console.log(json)

/*
console.error ()
console.info ()
console.warn ()
*/