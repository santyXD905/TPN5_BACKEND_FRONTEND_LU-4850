import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Punto1Component } from './components/punto1/punto1.component';
import { Punto1FormComponent } from './components/punto1-form/punto1-form.component';
import { Punto2Component } from './components/punto2/punto2.component';
import { Punto2ListasComponent } from './components/punto2-listas/punto2-listas.component'; 
import { Punto3Component } from './components/punto3/punto3.component';
import { Punto3ListaComponent } from './components/punto3-lista/punto3-lista.component';

const routes: Routes = [
  {path: 'punto1', component:Punto1Component},
  {path: 'punto1form', component:Punto1FormComponent},
  {path: 'punto2', component:Punto2Component},
  {path: 'punto2list', component:Punto2ListasComponent},
  {path: 'punto3', component:Punto3Component},
  {path: 'punto3list', component:Punto3ListaComponent},
  {path: '**', pathMatch:'full', redirectTo:'punto1form'} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
