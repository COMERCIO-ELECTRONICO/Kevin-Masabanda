import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./inicio/home/home.component";
import { NgModule } from "@angular/core";
import {NoEncontradoComponent} from "./inicio/no-encontrado/no-encontrado.component";



const rutas: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: ':home/iniciar-sesion',
        component: IniciarSesionComponent,
      },
      //:home/login' se redireccione en orden, primero en home y luego a login 
    {
        path: ':home/login',
        component: LoginComponent
    },
    {
        path: 'usuario',
        loadChildren: ()=>import('./usuario/usuario.module')
        .then(usuario=>usuario.UsuarioModule)
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: NoEncontradoComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(rutas)],
    providers: [],
    declarations: [],
    exports: [RouterModule]
})

export class AppRoutesComponent {

}