import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent, ProductsComponent, SignupComponent } from './app.index';


const routes: Routes = [
  { path: "home", component: DashboardComponent },
  { path: "shop", component: ProductsComponent },
  { path: "signup", component: SignupComponent },
  { path: "", component: DashboardComponent },
  { path: "**", redirectTo: "home" }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule    
  ]
})
export class AppRoutingModule { }
