import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PBMaterialModule } from './material-module';
import { HomeComponent } from './components/home/home.component';
// import { ProductsModule } from './modules/products/products.module';
// for lazy loading ProductsModule is commented

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PBMaterialModule,
    // ProductsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
