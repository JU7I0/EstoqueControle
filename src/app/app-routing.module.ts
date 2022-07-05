import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { EntrarComponent } from './entrar/entrar.component';

const routes: Routes = [
  { path:'', redirectTo:'entrar', pathMatch:'full'},
  { path:'cadastro', component:CadastroComponent },
  { path:'entrar', component:EntrarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
