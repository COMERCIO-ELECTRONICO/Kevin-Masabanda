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
var  json2  =  {
    nombre:'kevin',
    edad:20,
    soltero: true,
    fecha: new Date('1995/02/24'),
    interese:
    {
        hobbies: [
          'futbol',
          'ps4'
        ],
        peliculas: [
            {
                nombre: '',
                tipo: '',
                esBuena: true,
            },
            {
                nombre: '',
                tipo: '',
                esBuena: true,
            }
        ]
    },
    familia: [
        {
            nombre: '',
            edad: 1,
        },
        {
            nombre: '',
            edad: 1,
        }
    ]
}
//stringify 

var json2String = JSON.stringify(json2)
console.log(json2)
console.log(json2String)

//Parse

var jsonParse = JSON.parse(json2String)
console.log(jsonParse)

