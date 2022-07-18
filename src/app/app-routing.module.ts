import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeRoutingModule } from './home/home-routing.module';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes), 
            HomeRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
