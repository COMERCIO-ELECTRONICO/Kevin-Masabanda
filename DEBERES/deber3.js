//A)allback crear un USUARIO (JSON), buscar en si ya existen debe 
//imprimir que ya existe y sino crearlo 
var JSON = [
    {name: "kevin", edad:40, fechaNacimiento:"1999/09/09", Telf: "0999999999"},
   {name: "vladimir", edad:23, fechaNacimiento:"1999/96/28", Telf: "3040672"},
    {name: "kevin", edad:25, fechaNacimiento:"1999/96/28", Telf: "3040672"},
   // {name: "luis", edad:23, fechaNacimiento:"1999/96/28", Telf: "3040672"},
   // {name: "kevin", edad:30, fechaNacimiento:"1999/96/28", Telf: "3040672"},
   // {name: "jose", edad:23, fechaNacimiento:"1999/96/28", Telf: "3040672"},
   // {name: "pepe", edad:25, fechaNacimiento:"1999/96/28", Telf: "3040672"},
  //  {name: "pepe", edad:25, fechaNacimiento:"1999/96/28", Telf: "3040672"},
];
var listado = {};
var nuevos = JSON.filter(function (e) { 
    return listado[e.name] ? false : (listado[e.name] = true);
});
console.log(nuevos);
//////////////////////////////////////////////////////////////////////////
//B) callback editar un usuario
/*
var JSON2= [{
    "name2": "kevin",
    "edad": "40",
    "fechaNacimiento": "1999/09/09",
    "Telf": "0999999999"
}];
*/ //con estas lineas se imprime solo el usuario que se edita
//con estas se imprime el usuario editado y los demas que no edite
//cambiando las variables por JSON2 y name2
var nameEditado = "jorge"
JSON[0].name = nameEditado //0 la posicion que nombre quiero editar
console.log(JSON);
 //////////////////////////////////////////////////////////////////////////////
 //C) ELIMINAR USUARIO
 function eliminar(usuario,name,edad,fechaNacimiento,Telf,indice,indice2,indice3,indice4,m) {
    usuario[indice] = name 
    usuario[indice2] = edad
    usuario[indice3] = fechaNacimiento
    usuario[indice4] = Telf
    m({
      mensaje: "eliminado",
      usuario,
    });
  }

  eliminar(JSON, "",'','','',0,1,2,3,(respuestaMensaje) => {
    console.log(respuestaMensaje);
  }); 
  
  
  //D) ENLISTAR
var arregloUsuario = ['kevin','vladimir','jorge']
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