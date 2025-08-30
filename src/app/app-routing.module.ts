import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ServicoComponent } from './servico/servico.component';

const routes: Routes = [
  {path:"",component:InicioComponent},
  {path:"inicio",component:InicioComponent},
  {path:"servico",component:ServicoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
