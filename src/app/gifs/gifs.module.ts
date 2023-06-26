import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { ResultadosComponent } from './components/resultados/resultados.component';
import { HomePageComponent } from './pages/home/home-page.component';
import { CardComponent } from './components/card/card.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    BusquedaComponent,
    ResultadosComponent,
    HomePageComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    HomePageComponent,
  ]
})
export class GifsModule { }
