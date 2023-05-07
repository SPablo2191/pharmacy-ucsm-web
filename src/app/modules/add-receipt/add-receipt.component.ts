import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Observable, Subscription, map } from 'rxjs';
import { abstractForm } from 'src/app/core/classes/abstract-form';
import { Branch } from 'src/app/models/Branch.interface';
import { BranchService } from 'src/app/services/branch.service';
import { ChooseProductsComponent } from './components/choose-products/choose-products.component';
import { Product } from 'src/app/models/Product.interface';
import { Column } from 'src/app/core/interfaces/Column.interface';
import { CustomerService } from 'src/app/services/customer.service';
import { Customer } from 'src/app/models/Customer.interface';
import { ReceiptService } from 'src/app/services/receipt.service';
import { Receipt, ReceiptDetail } from 'src/app/models/Receipt.interface';
import { Router } from '@angular/router';
import { ToastMessageService } from 'src/app/core/services/toast-message.service';

@Component({
  selector: 'app-add-receipt',
  templateUrl: './add-receipt.component.html',
  styleUrls: ['./add-receipt.component.scss'],
})
export class AddReceiptComponent extends abstractForm implements OnInit,OnDestroy {
  branches!: Branch[];
  productsSelected: Product[] = [];
  ref!: DynamicDialogRef;
  subscriptions$: Subscription = new Subscription();
  constructor(
    fb: FormBuilder,
    private branchService: BranchService,
    protected dialogService: DialogService,
    private customerService: CustomerService,
    private receiptService: ReceiptService,
    private toastService: ToastMessageService,
    private router: Router
  ) {
    super(fb);
  }
  ngOnDestroy(): void {
    this.subscriptions$.unsubscribe();
  }
  ngOnInit(): void {
    this.createForm({
      name: [null, Validators.required],
      lastName: [null, Validators.required],
      phoneNumber: [null, Validators.required],
      DNI: [null, Validators.required],
      address: [null, Validators.required],
      email: [null, Validators.required],
      branch: [null, Validators.required],
      details: [null, this.productsSelected],
      total: [null, Validators.required],
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
    if (!this.formGroup.get('branch')?.value) {
      return;
    }
    this.ref = this.dialogService.open(ChooseProductsComponent, {
      header: `Seleccionar Producto`,
      width: '60%',
      data: this.formGroup.get('branch')?.value,
      maximizable: true,
    });
    this.ref.onClose
      .pipe(
        map((response: Product) => {
          if (!this.productsSelected.some((item) => item.id === response.id)) {
            this.productsSelected.push(response);
          }
        })
      )
      .subscribe();
  }
  override submit(): void {
    this.formGroup.markAsDirty();
    this.formGroup.markAllAsTouched();
    if (!this.formGroup.valid) {
      this.toastService.showError(
        'Error en formulario',
        'Debe completar todos los campos para registrar una factura'
      );
      return;
    }
    // create the new customer
    let customer: Customer = {
      name: this.formGroup.controls['name'].value,
      lastName: this.formGroup.controls['lastName'].value,
      address: this.formGroup.controls['address'].value,
      DNI: this.formGroup.controls['DNI'].value,
      email: this.formGroup.controls['email'].value,
      phoneNumber: this.formGroup.controls['phoneNumber'].value,
    } as Customer;
    this.subscriptions$.add(
      this.customerService
        .post(customer)
        .pipe(
          map((response: any) => {
            // create a new receipt
            let details: ReceiptDetail[] = [];
            this.productsSelected.forEach((product) => {
              let new_detail: ReceiptDetail = {
                product_id: product.id,
                quantity: product.quantitySelected,
                unitPrice: product.price,
                subTotal: product.subTotal,
              } as ReceiptDetail;
              details.push(new_detail);
            });
            let receipt: Receipt = {
              branch_id: this.formGroup.controls['branch'].value,
              customer_id: response.id,
              details: details,
              total: this.formGroup.controls['total'].value,
            } as Receipt;
            console.log(receipt.details);
            this.subscriptions$.add(
              this.receiptService
                .post(receipt, {
                  branch_id: receipt.branch_id,
                  customer_id: receipt.customer_id,
                })
                .pipe(
                  map((response) => {
                    console.log(response);
                    this.toastService.showSuccess(
                      'Registro Exitoso!!!',
                      'La factura fue registrada con exito.'
                    );
                    setTimeout(() => {
                      this.router.navigate(['..']);
                    }, 2000);
                  })
                )
                .subscribe()
            );
          })
        )
        .subscribe()
    );
  }
}
