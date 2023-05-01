import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReceiptRoutingModule } from './receipt-routing.module';
import { ReceiptComponent } from './receipt.component';
import { UiCrudTableComponent } from 'src/app/shared/ui-crud-table/ui-crud-table.component';


@NgModule({
  declarations: [
    ReceiptComponent
  ],
  imports: [
    CommonModule,
    ReceiptRoutingModule,
    UiCrudTableComponent
  ]
})
export class ReceiptModule { }
