import { LoginComponent } from './login/login.component';

import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/Router';
import { HomeComponent } from './home/home.component';
import { NoEncontradoComponent } from './no-encontrado/no-encontrado.component';
const rutas: Routes = [
    {
      path: 'home',
      component: HomeComponent,
    },
    {
      path: ':home/iniciar-sesion',
      component: IniciarSesionComponent,
    },
    {
      path: ':home/login',
      component: LoginComponent
    },    
    
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    },
    {
      path: '**',
      component: NoEncontradoComponent,
    },
  ];
@NgModule({
  imports: [
      RouterModule.forRoot(rutas)
  ],
  providers: [],
  exports: [RouterModule],
})
export class AppRoutes {}