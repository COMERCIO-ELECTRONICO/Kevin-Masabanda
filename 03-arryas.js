var arregloNumero = [1,2,3,4]
console.log(arregloNumero[2])
//slice y splice
//var arregloSlice = arregloNumero.slice(0,1)
//console.log(arregloSlice);
//console.log(arregloNumero);
//Pop: elimina ultimo elemento
///console.log(arregloNumero.pop())
//console.log(arregloNumero)

var arreglo2 = ['kevin', 1, true { numero: 1}];
/*arreglo2
.forEach(
    function(item,indice,arreglo){
        console.log('item: '+ item);
        console.log('indice: '+ indice);
        console.log('arreglo '+ arreglo);
}
)*/
//map: returno arreglo, mutando o modificando el arreglo 
var arregloMutado = arreglo2
.map(
    (item,indice,arreglo)=>{
console.log(item)
return item+1;
    }
)
console.log(arregloMutado);