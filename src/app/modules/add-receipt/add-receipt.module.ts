import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddReceiptRoutingModule } from './add-receipt-routing.module';
import { AddReceiptComponent } from './add-receipt.component';
import { UiInputTextComponent } from 'src/app/shared/ui-input-text/ui-input-text.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UiInputNumberComponent } from 'src/app/shared/ui-input-number/ui-input-number.component';
import { UiInputButtonComponent } from 'src/app/shared/ui-input-button/ui-input-button.component';
import { UiDropdownComponent } from 'src/app/shared/ui-dropdown/ui-dropdown.component';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ButtonModule } from 'primeng/button';
import { UiCrudTableComponent } from 'src/app/shared/ui-crud-table/ui-crud-table.component';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [AddReceiptComponent],
  imports: [
    CommonModule,
    AddReceiptRoutingModule,
    ReactiveFormsModule,
    UiInputTextComponent,
    UiInputNumberComponent,
    UiInputButtonComponent,
    UiCrudTableComponent,
    UiDropdownComponent,
    InputTextModule,
    ButtonModule,
  ],
  providers: [DialogService, DynamicDialogRef],
})
export class AddReceiptModule {}
