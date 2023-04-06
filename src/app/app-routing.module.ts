import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { HistoriaClinica1Component } from './Components/historia-clinica1/historia-clinica1.component';
import { HistoriaClinica2Component } from './Components/historia-clinica2/historia-clinica2.component';
import { PruebaComponent } from './Components/prueba/prueba.component';
import { ProcesoVisoEspacialComponent } from './Components/proceso-viso-espacial/proceso-viso-espacial.component';
import { RetencionDigitosProgresionComponent } from './Components/retencion-digitos-progresion/retencion-digitos-progresion.component';
import { FormacionCategoriasComponent } from './Components/formacion-categorias/formacion-categorias.component';
import { OrientacionComponent } from './Components/orientacion/orientacion.component';
import { CodiCarasComponent } from './Components/codi-caras/codi-caras.component';

const ROUTES:Routes =[

  { path: '', component: LoginComponent },
  { path: 'historiaClinica1', component: HistoriaClinica1Component },
  { path: 'historiaClinica2', component: HistoriaClinica2Component },
  { path: 'rdr', component: PruebaComponent },
  { path: 'rdp', component: RetencionDigitosProgresionComponent },
  { path: 'procesoViso', component: ProcesoVisoEspacialComponent },
  { path: 'formCategorias', component: FormacionCategoriasComponent },
  { path: 'orientacion', component: OrientacionComponent },
  { path: 'codificacionCaras', component: CodiCarasComponent }
  
]


@NgModule({
  // declarations: [],
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }