import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../ui-libs/material/material.module';
import { PrimengModule } from '../ui-libs/primeng/primeng.module';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  exports:[
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    PrimengModule,
    HttpClientModule,
    LayoutModule
  ]
})
export class CoreModule { }
