import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from "@angular/router";
import {
  AppComponent, StringInterpolationComponent, PropertyBindingComponent, EventBindingComponent, TwowayBindingComponent, NavigationComponent, DashboardComponent, SignupComponent, ProductsComponent
} from "./app.index";
// import * as components from "./app.index";
import { FormsModule } from '@angular/forms';
import { ProductsModule } from './products/products.module';
import { LoggerService } from './shared/services/logger.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './ui-libs/material/material.module';
import { LayoutModule } from '@angular/cdk/layout';
import { ProductsManagerModule } from './products-manager/products-manager.module';
import { PrimengModule } from './ui-libs/primeng/primeng.module';
import { MessageService } from 'primeng/api';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    StringInterpolationComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwowayBindingComponent,
    NavigationComponent,
    DashboardComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ProductsModule,
    SharedModule,
    ProductsManagerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    PrimengModule,
    LayoutModule
  ],
  providers: [LoggerService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
