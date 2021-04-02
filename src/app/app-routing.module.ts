import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent, ProductsComponent, SignupComponent } from './app.index';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: "home", component: DashboardComponent },
  { path: "shop", component: ProductsComponent },
  { path: "signup", component: SignupComponent },
  { path: "login", component: LoginComponent },
  {
    path: "productsmanager",
    loadChildren: () => import("./products-manager/products-manager.module")
      .then(m => m.ProductsManagerModule)
  },
  { path: "", component: DashboardComponent },
  { path: "**", redirectTo: "home" }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    // RouterModule
  ]
})
export class AppRoutingModule { }
