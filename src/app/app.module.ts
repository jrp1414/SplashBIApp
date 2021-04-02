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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { StoreModule } from '@ngrx/store';
import { cartReducer } from './store/cart.reducer';
import { metaReducers, reducers } from './store/meta-reducer';
import { LoginComponent } from './login/login.component';
import { TokenInterceptor } from './products/services/token.interceptor';
import { ErrorInterceptor } from './products/services/error.interceptor';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';

const routes: Routes = [

];

@NgModule({
  declarations: [
    AppComponent,
    StringInterpolationComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwowayBindingComponent,
    NavigationComponent,
    DashboardComponent,
    SignupComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRoutingModule,
    ProductsModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({ cartR: reducers }, { metaReducers }),
    //productdetails:id
    //** - Redirect to Home */
    //home = Dashboard
    //shop - ProductsComponent
    //
    //
  ],
  providers: [
    LoggerService, 
    MessageService,
    {provide:HTTP_INTERCEPTORS,useClass:TokenInterceptor,multi:true},
    {provide:HTTP_INTERCEPTORS,useClass:ErrorInterceptor,multi:true},
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }




