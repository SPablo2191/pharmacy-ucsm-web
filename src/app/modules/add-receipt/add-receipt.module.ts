import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddReceiptRoutingModule } from './add-receipt-routing.module';
import { AddReceiptComponent } from './add-receipt.component';
import { UiInputTextComponent } from 'src/app/shared/ui-input-text/ui-input-text.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UiInputNumberComponent } from 'src/app/shared/ui-input-number/ui-input-number.component';
import { UiInputButtonComponent } from 'src/app/shared/ui-input-button/ui-input-button.component';
import { UiDropdownComponent } from 'src/app/shared/ui-dropdown/ui-dropdown.component';
import { DialogService } from 'primeng/dynamicdialog';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    AddReceiptComponent
  ],
  imports: [
    CommonModule,
    AddReceiptRoutingModule,
    ReactiveFormsModule,
    UiInputTextComponent,
    UiInputNumberComponent,
    UiInputButtonComponent,
    UiDropdownComponent,
    ButtonModule
  ],providers: [DialogService]
})
export class AddReceiptModule { }
