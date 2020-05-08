var json = {
    arreglos: {
      primero: [2, 4, 5, 8, 6, 9, 10],
      segundo: [
        { valor: 1 },
        { valor: 4 },
        { valor: 2 },
        { valor: 24 },
        { valor: 100 },
        { valor: 23 },
        { valor: 45 },
        { valor: 23 },
      ],
    },
  };
  //MULTIPLICAR X2
  var PRIMERO1 = json.arreglos.primero
  .map((item, index, arreglos) => {
    return item *2
  });
  console.log("MULTIPLICACION X2")
  console.log(PRIMERO1)
  //FILTRO NUMEROS PARES
  var SEGUNDO1 = json.arreglos.primero
  .filter((item, valor, arreglos) => {
    return item===2|item=== 4|item===6|item===8|item===10 //Es para filtrar los números pares en el arreglo
  });
  console.log("PARES")
  console.log(SEGUNDO1)
  
  //ACTIVIDAD II
  //FILTRO NUMEROS IMPARES
  var SEGUNDO1 = json.arreglos.segundo
  .filter((item, valor, arreglos) => {
      return item.valor===1|item.valor===23|item.valor===45;
    });
    console.log("IMPARES")
    console.log(SEGUNDO1) 
  //SUMAR +2
  var SEGUNDO2 = json.arreglos.segundo
  .map((item, index, arreglos) => {
    return item.valor+2
  });
  console.log("SUMA +2");
  console.log(SEGUNDO2);