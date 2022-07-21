import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//MODULES
import { SharedModule } from '@shared/shared.module';

import { NoImagePipe } from './pipes/no-image.pipe';
import { HomeModule } from './home/home.module';


@NgModule({
  declarations: [
    AppComponent,
    NoImagePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
