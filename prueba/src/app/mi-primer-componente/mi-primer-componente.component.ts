import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
//import { EventEmitter } from 'protractor';
//@componentDecorador() decorador 
@Component({
  selector: 'app-mi-primer-componente',
  templateUrl: './mi-primer-componente.component.html',
  styleUrls: ['./mi-primer-componente.component.css']
})
export class MiPrimerComponenteComponent implements OnInit {

  @Input() titulo: string;
  @Input() nombreBoton: string;
  @Input() imagenPath: string;
  @Input() datos;

  @Output() saludoHijo = new EventEmitter();
  
  fecha = new Date();
  sueldo: number = 3.1416;
  nombre: string = 'kevin';



  
  constructor() { }

  ngOnInit(): void {
    console.log('datos del padre en hijo')
    console.log(this.datos)
  }
  ngOnDestroy(){
    
  }

SALUDAR(){
  alert('holaaaaaa');
  this.saludoHijo.emit('saludo de tu hijo')
}
}
