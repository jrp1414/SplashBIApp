import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuicklinkStrategy } from 'ngx-quicklink';
import { AdGroup2Component } from './Advertises/ad-group2/ad-group2.component';
import { AdHolderComponent } from './Advertises/ad-holder/ad-holder.component';
import { DashboardComponent, ProductsComponent, SignupComponent } from './app.index';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: "home", component: DashboardComponent },
  { path: "adholder", component: AdHolderComponent, outlet:"section1" },
  { path: "adholder2", component: AdGroup2Component, outlet:"section1" },
  // { path: "adholder2", component: AdGroup2Component, outlet:"section2" },
  { path: "shop", component: ProductsComponent },
  { path: "signup", component: SignupComponent },
  { path: "login", component: LoginComponent },
  {
    path: "productsmanager",
    loadChildren: () => import('./products-manager/products-manager.module')
      .then(m => m.ProductsManagerModule)
  },
  { path: "", component: DashboardComponent },
  { path: "**", redirectTo: "home" }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,{preloadingStrategy:QuicklinkStrategy})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
