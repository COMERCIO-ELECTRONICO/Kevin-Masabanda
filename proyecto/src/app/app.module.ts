import { AppRoutes } from './app.routes';
import { LoginComponent } from './../../../ejercicio/src/app/login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';

import { NoEncontradoComponent } from './no-encontrado/no-encontrado.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IniciarSesionComponent,
    LoginComponent,
    NoEncontradoComponent,
 
    
  ],
  imports: [ 
    BrowserModule,
    AppRoutes, 
    FormsModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
