import { InfoUserComponent } from './info-user/info-user.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
const rutas: Routes = [
    {
        path: ':nombre/info',
        component: InfoUserComponent,

    },
];

@NgModule({
imports: [RouterModule.forChild(rutas)],
providers: [],
exports: [RouterModule],

})

export class UsuarioRoutes{}