//API, rest API: COMUNICACION ENTRE PROGRAMAS, VIENE EN LENGUAJE JSON 
//PROGRAMACION FUNCIONAL: podemos mandar dentro de una funcion otra funcion 
/*function programacionFuncional{numero1, ()=>{}, 1}{
}*/
/*
//import { func } from "joi"

function primeraFunction(){
    setTimeout(
        ()=>{
        console.log('primera')
    },500
    )
    
}
function segundaFunction(){
    console.log('2')
}
//primeraFunction()
//segundaFunction()

//CALLBAK

function saluda(nombre, callback){
console.log('saludo a', nombre)
callback()
}

function funcionCallback(){
    primeraFunction()
    segundaFunction()
console.log('ya salude')
}
//saluda('Kevin', funcionCallback)
saluda('Kevin',()=>{
    console.log('saludaste')
}) 
//OTRA FORMA
function saludar(nombre){
    console.log(`ejecuto saludo a ${nombre}`)
    return nombre
}
function peticionUsuario(nombre, callback){
    callback({
        nombre: 'kevin'
    })
}
peticionUsuario('Kevin', saludar)
peticionUsuario('kevin', (saludar) => {
console.log(saludar);
})
---------------------------------------------------
//ANADIR USUARIO
var arreglo = []
var nombreNuevo = 'juan'
function anadirNombre(arreglo, nombre, cb) {
    arreglo.push(nombre);
    cb(
        {
            mensaje: 'exito',
            arreglo
        }
    )
}
anadirNombre(arreglo, 'kevin', (mensaje) => {
   console.log(mensaje);
});

//---------------------------------------------------------
//EDITAR NOMBRE EN UNA POSICION 
var arreglo = ['juan', 'juan', 'juan']
var nombreNuevo = 'juan'
function anadirNombre(arreglo, nombre, indice, cb) {
    //arreglo.push(nombre);
    arreglo[indice] = nombre
    cb(
        {
            mensaje: 'exito',
            arreglo
        }
    )
}
anadirNombre(arreglo, 'kevin', 2, (mensaje) => {
    console.log(mensaje);
});
---------------------------------------------------------------------
*/ 
//ENLISTAR USUARIOS
var arregloUsuario = [1,2,3,4,5]
function listarUsuario(arreglo, cb){

    arreglo
    .forEach(
        usuario => {
            console.log(usuario);
        });
        cb({
            mensaje: 'lista de usuario'
        })
}
listarUsuario(arregloUsuario, (respuestMensaje)=>{
console.log(respuestMensaje);
})
//-----------------------------------------------------------------------------
//DEBER 
/* 
usar un arreglo de json (nombre, edad, fechaNacimiento, Telf)
- callback crear un USUARIO (JSON), buscar en si ya existen debe 
imprimir que ya existe y sino crearlo 
- callback editar un usuario
- callback eliminar un usuario
- callback listar usuario 
*/
//null: el valor esta vacio
//var numero = 0;
//underfined: si esta definido o no
//var num, numero

//npm install nombrePaquete
//npm install nombrePaquete@1.23
//npm install nombrePaquete@latest