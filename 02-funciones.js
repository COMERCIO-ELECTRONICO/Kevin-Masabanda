
//funciones normales
function saludar(){
    return 'hola'
}
saludar()
console.log(saludar())


//funciones anonimas 
var funcionAnonima = function(){
    return 'funcion anonima'
}
console.log(funcionAnonima())

//funciones arrow fat function
var functionFechaGorda = (a, b) => {
    return a + b;
}
console.log(functionFechaGorda(2, 3));



var json ={
    suma: (a,b)=>{
return a + b;
    }
}
console.log(json.suma(1,2));