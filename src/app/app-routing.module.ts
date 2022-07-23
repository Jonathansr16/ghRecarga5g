import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultasRoutingModule } from '@consultas/consultas-routing.module';
import { HomeRoutingModule } from './home/home-routing.module';

const routes: Routes = [
  { path: 'portal', loadChildren: () => import('@home/home.module').then(m => m.HomeModule)},
  { path: 'consultas', loadChildren: () => import('@consultas/consultas.module').then(m => m.ConsultasModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'top'}), 
            HomeRoutingModule,
            ConsultasRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
