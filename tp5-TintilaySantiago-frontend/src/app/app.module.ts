import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Punto1Component } from './components/punto1/punto1.component';
import { HeaderComponent } from './components/layouds/header/header.component';
import { FooterComponent } from './components/layouds/footer/footer.component';
import { Punto1FormComponent } from './components/punto1-form/punto1-form.component';
import { Punto2Component } from './components/punto2/punto2.component';
import { Punto2ListasComponent } from './components/punto2-listas/punto2-listas.component';
import { Punto3Component } from './components/punto3/punto3.component';
import { Punto3ListaComponent } from './components/punto3-lista/punto3-lista.component'; 

@NgModule({
  declarations: [
    AppComponent,
    Punto1Component,
    HeaderComponent,
    FooterComponent,
    Punto1FormComponent,
    Punto2Component,
    Punto2ListasComponent,
    Punto3Component,
    Punto3ListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
