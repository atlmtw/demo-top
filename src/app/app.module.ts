import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from "@angular/common";

import { AppComponent } from './app.component';
import { TeatopNavbarComponent } from './teatop-navbar/teatop-navbar.component';
import { TeatopMenuComponent } from './teatop-menu/teatop-menu.component';

import { ProductService } from './providers/product.service';
import { TeatopLocationComponent } from './teatop-location/teatop-location.component';

@NgModule({
  declarations: [
    AppComponent,
    TeatopNavbarComponent,
    TeatopMenuComponent,
    TeatopLocationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    CommonModule,
  ],
  providers: [
    ProductService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
