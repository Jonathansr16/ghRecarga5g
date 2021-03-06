import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosComponent } from './productos.component';
import { PlataformasComponent } from './plataformas/plataformas.component';
import { PagaquiComponent } from './plataformas/pagaqui/pagaqui.component';
import { RecargakiComponent } from './plataformas/recargaki/recargaki.component';
import { ServiciosComponent } from './servicios/servicios.component';
@NgModule({
  declarations: [
    ProductosComponent,
    PlataformasComponent,
    PagaquiComponent,
    RecargakiComponent,
    ServiciosComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class ProductosModule { }
