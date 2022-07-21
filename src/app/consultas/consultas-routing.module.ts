import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//COMPONENTS
import { PlataformasComponent } from '@consultas/plataformas/plataformas.component';
import { ProductosComponent } from '@consultas/productos/productos.component';
import { PlatpagaquiComponent } from '@consultas/platpagaqui/platpagaqui.component';
import { PlatrecargakiComponent } from '@consultas/platrecargaki/platrecargaki.component';
import { NoPageFoundComponent } from '@components/no-page-found/no-page-found.component';

const routes: Routes = [

  { path: 'consultas/plataformas', component: PlataformasComponent },
  { path: 'consultas/productos', component: ProductosComponent },
  { path: 'consultas/pagaqui', component: PlatpagaquiComponent },
  { path: 'consultas/recargaki', component: PlatrecargakiComponent },
  { path: '**', component: NoPageFoundComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultasRoutingModule { }
