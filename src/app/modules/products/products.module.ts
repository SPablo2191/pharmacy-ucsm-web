import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { UiCrudTableComponent } from 'src/app/shared/ui-crud-table/ui-crud-table.component';


@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    UiCrudTableComponent,
  ]
})
export class ProductsModule { }
