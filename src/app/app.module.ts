import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from './app.component';
import { StringInterpolationComponent } from './string-interpolation/string-interpolation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwowayBindingComponent } from './twoway-binding/twoway-binding.component';
import { FormsModule } from '@angular/forms';
import { ProductsModule } from './products/products.module';
import { ProductService } from './products/services/product.service';
import { LoggerService } from './shared/services/logger.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './ui-libs/material/material.module';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { ProductsComponent } from './products/products/products.component';
import { ProductsManagerModule } from './products-manager/products-manager.module';
import { PrimengModule } from './ui-libs/primeng/primeng.module';
import { SignupComponent } from './signup/signup.component';
import { MessageService } from 'primeng/api';
import { SharedModule } from './shared/shared.module';

const routes: Routes = [
  { path: "home", component: DashboardComponent },
  { path: "shop", component: ProductsComponent },
  { path: "signup", component: SignupComponent },
  { path: "", component: DashboardComponent },
  { path: "**", redirectTo:"home" }
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
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ProductsModule,
    SharedModule, 
    ProductsManagerModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MaterialModule,
    PrimengModule,
    LayoutModule
  ],
  providers: [LoggerService,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
