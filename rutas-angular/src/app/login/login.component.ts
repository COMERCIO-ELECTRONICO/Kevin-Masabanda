import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor() {}
  email = '';
  contrasena = '';
  name = '';
  surname = '';


  ngOnInit(): void {}

  obtenerFormulario(formulario) {
    console.log(formulario);
    alert(
    
      'CORREO: ' + 
        formulario.controls.email.value +
        'NOMBRE: ' + 
        formulario.controls.name.value + 
        'APELLIDO: ' + 
        formulario.controls.surname.value + 
        'CLAVE: ' + 
        formulario.controls.contrasena.value 
        
    );
  }
}



