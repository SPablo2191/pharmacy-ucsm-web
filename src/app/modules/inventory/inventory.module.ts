import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryRoutingModule } from './inventory-routing.module';
import { InventoryComponent } from './inventory.component';
import { UiCrudTableComponent } from 'src/app/shared/ui-crud-table/ui-crud-table.component';


@NgModule({
  declarations: [
    InventoryComponent
  ],
  imports: [
    CommonModule,
    InventoryRoutingModule,
    UiCrudTableComponent
  ]
})
export class InventoryModule { }
