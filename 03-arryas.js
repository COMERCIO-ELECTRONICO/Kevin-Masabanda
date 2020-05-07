var  arregloNumero  =  [ 1 ,  2 ,  3 ,  4 ]
// console.log (arregloNumero)
// indexOf, encontrando el indice del elemento
// console.log (arregloNumero.indexOf (0))
// agregar elementos, Push
//console.log(arregloNumero.push(10))
// console.log (arregloNumero)
// acceder elementos
// console.log (arregloNumero [2])
// rebanada y empalme

// slice => dicidir el vector original;
var  arregloSlice  =  arregloNumero . rebanada ( 0 ,  1 )
//console.log(arregloSlice);
//console.log(arregloNumero);
// splice => dicidir el vector original;
// var arregloSplice = arregloNumero.splice (2, 1)
//console.log(arregloSplice);
//console.log(arregloNumero);

// Pop => elimina ultimo elemento

//console.log (arregloNumero.pop ())
//console.log(arregloNumero)

var  arreglo2  =  [ 1 ,  2 ,  3 ,  4 ] ;
/ * arreglo2
    .para cada(
        función (ítem, índice, arreglo) {
            console.log ('item:' + item);
            console.log ('indice:' + indice);
            console.log ('arreglo:' + arreglo);
        }
    ) * /

// map => returnno arreglo, muta al arreglo o lo modifica
/ * var arregloMutado = arreglo2
    .mapa(
        (item, indice, arreglo) => {
            console.log (elemento)
            if (elemento === 2) {
                devolver artículo + 2;
            }
            devolver artículo + 1;
        }
    )
console.log (arregloMutado); * /

// filter => retorna arreglor dependien de la condicion

/ * var arregloFilter = arreglo2
    .filtrar(
        (item, valor, arreglo) => {
            devolver artículo <3
        }
    )
console.log (arregloFilter); * /

// find => retorn un valor
/ * var valorFind = arreglo2
    .encontrar(
        (item, indice, arreglo) => {
            artículo devuelto === 1
        }
    )
    console.log (valorFind); * /

// todos y algunos
// cada verificación si todo los valores corresponden a una condición 
// verdadero Falso
// algunos verifica si almenos uno requerido una condicion 


