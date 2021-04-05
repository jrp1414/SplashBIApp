import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import {
  AppComponent, StringInterpolationComponent, PropertyBindingComponent, EventBindingComponent, TwowayBindingComponent, NavigationComponent, DashboardComponent, SignupComponent, ProductsComponent
} from "./app.index";
// import * as components from "./app.index";
import { FormsModule } from '@angular/forms';
import { ProductsModule } from './products/products.module';
import { LoggerService } from './shared/services/logger.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { Ad1Component } from './Advertises/ad1/ad1.component';
import { Ad2Component } from './Advertises/ad2/ad2.component';
import { Ad3Component } from './Advertises/ad3/ad3.component';
import { AdDirective } from './Advertises/ad.directive';
import { AdHolderComponent } from './Advertises/ad-holder/ad-holder.component';
import { AdGroup2Component } from './Advertises/ad-group2/ad-group2.component';
import { QuicklinkModule, QuicklinkStrategy } from 'ngx-quicklink';

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
    LoginComponent,
    Ad1Component,
    Ad2Component,
    Ad3Component,
    AdDirective,
    AdHolderComponent,
    AdGroup2Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,
    AppRoutingModule,
    ProductsModule,
    QuicklinkModule,
    // RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules}),
    RouterModule.forRoot(routes,{preloadingStrategy:QuicklinkStrategy}),
    StoreModule.forRoot({ cartR: reducers }, { metaReducers })
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




