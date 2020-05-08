const Joi = require('joi')


const jsonPersona = {
    nombre: Joi.string().min(2).max(10).required(),//el json tengo minimo de 2 un maximo de 3 y sea requerido  
    apellido: Joi.string().min(3).max(30).required(),
    edad: Joi.number().integer(3).min(18).max(50),
}

const jsonValidacionPersona = Joi
    .object()
    .keys(jsonPersona)
    .with('nombre', 'apellido')

const jsonPrueba = {
    nombre: 'asdasd',
    apellido: 'masabanda'
}

Joi.validate(jsonPrueba, jsonValidacionPersona, (error, valor) => {
    console.log(error);
    console.log(valor);
})


