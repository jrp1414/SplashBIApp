import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuicklinkStrategy } from 'ngx-quicklink';
import { AdGroup2Component } from './Advertises/ad-group2/ad-group2.component';
import { AdHolderComponent } from './Advertises/ad-holder/ad-holder.component';
import { DashboardComponent, ProductsComponent, SignupComponent } from './app.index';
import { ComponentContainerComponent } from './component-container/component-container.component';
import { LoginComponent } from './login/login.component';
import { TemplateContainerComponent } from './template-container/template-container.component';
import { WebWorkerExComponent } from './web-worker-ex/web-worker-ex.component';


const routes: Routes = [
  { path: "home", component: DashboardComponent },
  { path: "adholder", component: AdHolderComponent, outlet: "section1" },
  { path: "adholder2", component: AdGroup2Component, outlet: "section1" },
  // { path: "adholder2", component: AdGroup2Component, outlet:"section2" },
  { path: "shop", component: ProductsComponent },
  { path: "signup", component: SignupComponent },
  { path: "login", component: LoginComponent },
  { path: "webworker", component: WebWorkerExComponent },
  { path: "templatecontainer", component: TemplateContainerComponent },
  { path: "componentcontainer", component: ComponentContainerComponent },
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
    RouterModule.forRoot(routes, { preloadingStrategy: QuicklinkStrategy })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
