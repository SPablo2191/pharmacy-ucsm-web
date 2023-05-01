import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddReceiptComponent } from './add-receipt.component';

const routes: Routes = [{ path: '', component: AddReceiptComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddReceiptRoutingModule { }
