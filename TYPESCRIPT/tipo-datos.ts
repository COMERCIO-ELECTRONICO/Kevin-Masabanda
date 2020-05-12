//tipo de datos
const nombre: string = 'kevin';
const numero: number = 1;
const Bool: boolean = true;
const objetoUsuario: object = {
    nombre: 'kevin',
}

//arreglos
const arregloUno: Array<boolean> = [];
const arregloDos: string[] = [];

//varios tipados 
//dos tipados
const nombreDos: (string | number) = 1
const arreglo1: Array<boolean | number> = [];
const arreglo2: (string | object)[] = [];

let variableLet: number;
//se diferencian porque la segunda se inicializa
const variableConts: number = 1;
//variable any: permite cualquier tipo de dato
let cualquierVariable: any


//FUNCIONES
//num1?: siginifca que esa variable es opcional, siempre van al final 
function sumar(num1?:number, num2?: number): number {
    let a = 2; 
    let b = 3; 

    if(num1){
        a = num1;
    }
    if(num2){
        b = num2;
    }
    return a + b;
};
sumar(5, 5); //sumo dos numeros
//ambos deben estar num1 y num2 ?
sumar(5); //sumo uno solos
sumar(); //no suma ninguna
console.log(sumar(5, 5));
console.log(sumar(5));
console.log(sumar());


//CLASES
class Persona{
    constructor(
        protected nombre?: string,
        public apellido?: string
    ){

    }
}

const nnuevaPersona = new Persona()

class hijo extends Persona {
    constructor(
        protected nombre: string,
        public apellido: string,
    ) {
        super(nombre, apellido);
        this.apellido = apellido;
    }
}

const hijoPersona = new hijo('kevin', 'jimenez');
console.log(hijoPersona);