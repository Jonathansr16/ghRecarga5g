import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SwiperModule } from 'swiper/angular';
import { RegistroComponent } from './registro/registro.component';
import { DirectivesModule } from '@directives/directives.module';


@NgModule({
  declarations: [
    HomeComponent,
    RegistroComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    HomeRoutingModule,
    SwiperModule,
    DirectivesModule
  ]
})
export class HomeModule { }
