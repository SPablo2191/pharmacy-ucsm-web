import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryRoutingModule } from './inventory-routing.module';
import { InventoryComponent } from './inventory.component';
import { UiCrudTableComponent } from 'src/app/shared/ui-crud-table/ui-crud-table.component';
import { UiDropdownComponent } from 'src/app/shared/ui-dropdown/ui-dropdown.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    InventoryComponent
  ],
  imports: [
    CommonModule,
    InventoryRoutingModule,
    UiCrudTableComponent,
    UiDropdownComponent,
    ReactiveFormsModule
  ]
})
export class InventoryModule { }
