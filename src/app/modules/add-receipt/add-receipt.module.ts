import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddReceiptRoutingModule } from './add-receipt-routing.module';
import { AddReceiptComponent } from './add-receipt.component';
import { UiInputTextComponent } from 'src/app/shared/ui-input-text/ui-input-text.component';


@NgModule({
  declarations: [
    AddReceiptComponent
  ],
  imports: [
    CommonModule,
    AddReceiptRoutingModule,
    UiInputTextComponent
  ]
})
export class AddReceiptModule { }
