import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { UsuarioRoutes } from './usuario.routes';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoUserComponent } from './info-user/info-user.component';



@NgModule({
  declarations: [InfoUserComponent],
  imports: [
    CommonModule,
    UsuarioRoutes,
    MatInputModule,
    FormsModule
  ]
})
export class UsuarioModule { }
