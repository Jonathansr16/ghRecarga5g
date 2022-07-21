import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


//COMPONENTS
import { PlataformasComponent } from './plataformas/plataformas.component';
import { ProductosComponent } from './productos/productos.component';
import { PlatpagaquiComponent } from './platpagaqui/platpagaqui.component';
import { PlatrecargakiComponent } from './platrecargaki/platrecargaki.component';

//MODULES
import { ConsultasRoutingModule } from '@consultas/consultas-routing.module';
@NgModule({
  declarations: [
   
  
    PlataformasComponent,
    ProductosComponent,
    PlatpagaquiComponent,
    PlatrecargakiComponent
  ],
  imports: [
    CommonModule,
    ConsultasRoutingModule
  ]
})
export class ConsultasModule { }
