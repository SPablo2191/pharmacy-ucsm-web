import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddReceiptRoutingModule } from './add-receipt-routing.module';
import { AddReceiptComponent } from './add-receipt.component';
import { UiInputTextComponent } from 'src/app/shared/ui-input-text/ui-input-text.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UiInputNumberComponent } from 'src/app/shared/ui-input-number/ui-input-number.component';


@NgModule({
  declarations: [
    AddReceiptComponent
  ],
  imports: [
    CommonModule,
    AddReceiptRoutingModule,
    ReactiveFormsModule,
    UiInputTextComponent,
    UiInputNumberComponent
  ]
})
export class AddReceiptModule { }
