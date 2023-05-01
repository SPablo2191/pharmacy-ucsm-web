import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddReceiptRoutingModule } from './add-receipt-routing.module';
import { AddReceiptComponent } from './add-receipt.component';


@NgModule({
  declarations: [
    AddReceiptComponent
  ],
  imports: [
    CommonModule,
    AddReceiptRoutingModule
  ]
})
export class AddReceiptModule { }
