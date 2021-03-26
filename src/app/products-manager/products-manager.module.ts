import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component';
import { AddComponent } from './add/add.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../ui-libs/material/material.module';
import { PrimengModule } from '../ui-libs/primeng/primeng.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductGuard } from '../products/services/product.guard';
import { InvalidComponent } from './invalid/invalid.component';
import { SharedModule } from '../shared/shared.module';
import { ProductDeactivateGuard } from '../products/services/product-deactivate.guard';
import { ProductsResolver } from '../products/services/products.resolver';

const routes: Routes = [
  {
    path: "productsmanager", component: ListComponent, resolve:{productsList:ProductsResolver}, children: [
      { path: "new", component: AddComponent, canDeactivate: [ProductDeactivateGuard] },
      { path: "invalid", component: InvalidComponent },
      { path: ":id", component: DetailsComponent, canActivate: [ProductGuard] },
      { path: ":id/edit", component: EditComponent },
    ]
  }
];

@NgModule({
  declarations: [ListComponent, DetailsComponent, EditComponent, AddComponent, InvalidComponent],
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    PrimengModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class ProductsManagerModule { }
