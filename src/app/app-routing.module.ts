import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EntrarComponent } from './entrar/entrar.component';
import { InfosComponent } from './infos/infos.component';

const routes: Routes = [
  { path:'', redirectTo:'entrar', pathMatch:'full'},
  { path:'cadastro', component:CadastroComponent },
  { path:'entrar', component:EntrarComponent},
  { path:'dashboard', component:DashboardComponent},
  { path:'infos', component:InfosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
