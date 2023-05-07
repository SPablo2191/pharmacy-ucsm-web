import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Observable, Subscription, map } from 'rxjs';
import { abstractForm } from 'src/app/core/classes/abstract-form';
import { Branch } from 'src/app/models/Branch.interface';
import { BranchService } from 'src/app/services/branch.service';
import { ChooseProductsComponent } from './components/choose-products/choose-products.component';
import { Product } from 'src/app/models/Product.interface';
import { Column } from 'src/app/core/interfaces/Column.interface';

@Component({
  selector: 'app-add-receipt',
  templateUrl: './add-receipt.component.html',
  styleUrls: ['./add-receipt.component.scss'],
})
export class AddReceiptComponent extends abstractForm implements OnInit {
  branches!: Branch[];
  productsSelected : Product[] = [];
  ref!: DynamicDialogRef;
  subscriptions$: Subscription = new Subscription();
  constructor(
    fb: FormBuilder,
    private branchService: BranchService,
    protected dialogService: DialogService
  ) {
    super(fb);
  }
  ngOnInit(): void {
    this.createForm({
      name: [null,Validators.required],
      lastname: [null,Validators.required],
      phoneNumber: [null,Validators.required],
      DNI: [null,Validators.required],
      address: [null,Validators.required],
      email: [null,Validators.required],
      branch: [null,Validators.required],
      details : [null,this.productsSelected],
      total : [null,Validators.required]
    });
    this.getBranches();
  }
  async getBranches() {
    this.subscriptions$.add(
      this.branchService
        .get()
        .pipe(
          map((response) => {
            this.branches = response;
          })
        )
        .subscribe()
    );
  }
  getDialog() {
    if(!this.formGroup.get('branch')?.value){
      return;
    }
    this.ref = this.dialogService.open(ChooseProductsComponent, {
      header: `Seleccionar Producto`,
      width: '60%',
      data: this.formGroup.get('branch')?.value,
      maximizable: true,
    });
    this.ref.onClose.pipe(
      map((response : Product)=>{
        if (!this.productsSelected.some(item => item.id === response.id)) {
          this.productsSelected.push(response);
        }
      })
    ).subscribe();
  }
  override submit(): void {
    this.formGroup.markAsDirty();
    this.formGroup.markAllAsTouched();
    if (!this.formGroup.valid) {
			return
		}
    console.log("lo logro :D");

  }
}
