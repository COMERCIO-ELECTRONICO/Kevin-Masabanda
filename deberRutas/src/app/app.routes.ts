import { NoEncontradoComponent } from './../../../rutas-angular/src/app/inicio/no-encontrado/no-encontrado.component';
import { LoginComponent } from './login/login.component';
import { PokemonNoEncontradoComponent } from './inicioPokemon/pokemon-no-encontrado/pokemon-no-encontrado.component';
import { HomePokemonComponent } from './inicioPokemon/home-pokemon/home-pokemon.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
/////RUTAS/////
const rutas: Routes = [
    {
        path:'inicio',
        component: HomePokemonComponent
    },
    {
        path:'login',
        component: LoginComponent
    },
    {
        path:'usuario',
        loadChildren: ()=>import('./pokemones/pokemones.module')
        .then(pokemon=>pokemon.PokemonesModule)
    
    },
    {
        //ruta por default
        path:'',
        redirectTo: 'inicio',
        pathMatch:'full'
    },
    {  //cuando no encuentra la pagina
        path:'**',
        component: PokemonNoEncontradoComponent
    },
]
@NgModule({
    imports: [RouterModule
    .forRoot(rutas)],
    providers: [],
    declarations: [],
    exports: [RouterModule]
})

export class AppRoutesComponent{

}