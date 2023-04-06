import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './Components/login/login.component';
import { FormsModule } from '@angular/forms';
import { HistoriaClinica1Component } from './Components/historia-clinica1/historia-clinica1.component';
import { AppComponent } from './Components/app.component';
import { PruebaComponent } from './Components/prueba/prueba.component';
import { ProcesoVisoEspacialComponent } from './Components/proceso-viso-espacial/proceso-viso-espacial.component';
import { HistoriaClinica2Component } from './Components/historia-clinica2/historia-clinica2.component';
import { RetencionDigitosProgresionComponent } from './Components/retencion-digitos-progresion/retencion-digitos-progresion.component';
import { FormacionCategoriasComponent } from './Components/formacion-categorias/formacion-categorias.component';
import { OrientacionComponent } from './Components/orientacion/orientacion.component';
import { CodiCarasComponent } from './Components/codi-caras/codi-caras.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HistoriaClinica1Component,
    PruebaComponent, 
    RetencionDigitosProgresionComponent,
    ProcesoVisoEspacialComponent, 
    HistoriaClinica2Component,
    FormacionCategoriasComponent, 
    OrientacionComponent, 
    CodiCarasComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
