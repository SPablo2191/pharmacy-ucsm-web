import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UiInputNumberComponent } from 'src/app/shared/ui-input-number/ui-input-number.component';
import { ButtonModule } from 'primeng/button';
import { UiInputButtonComponent } from 'src/app/shared/ui-input-button/ui-input-button.component';
import { abstractForm } from 'src/app/core/classes/abstract-form';
import { Subscription, map } from 'rxjs';
import { ToastMessageService } from 'src/app/core/services/toast-message.service';
import {
  DialogService,
  DynamicDialogConfig,
  DynamicDialogRef,
} from 'primeng/dynamicdialog';
import { ChooseProductsComponent } from 'src/app/modules/add-receipt/components/choose-products/choose-products.component';
import { Product } from 'src/app/models/Product.interface';
import { InputTextModule } from 'primeng/inputtext';
import { ProductService } from 'src/app/services/product.service';
import { Stock } from 'src/app/models/Stock.interface';
import { Depot } from 'src/app/models/Depot.interface';
import { StockService } from 'src/app/services/stock.service';

@Component({
  selector: 'app-add-stock',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UiInputNumberComponent,
    UiInputButtonComponent,
    ButtonModule,
    FormsModule,
    InputTextModule,
  ],
  template: `
    <form [formGroup]="formGroup" (ngSubmit)="submit()">
      <div class="flex my-2">
        <p-button
          icon="pi pi-plus"
          styleClass="p-button-rounded p-button-success mr-2"
          label="Agregar Productos"
          (onClick)="getDialog()"
        ></p-button>
      </div>
      <div *ngIf="productSelected">
        <p><b>Nombre:</b> {{ productSelected.name | titlecase }}</p>
        <p><b>Descripción:</b> {{ productSelected.description }}</p>
        <p><b>Precio:</b> {{ productSelected.price | currency }}</p>
      </div>
      <ui-input-number
        [group]="formGroup"
        name="quantity"
        label="Cantidad"
      ></ui-input-number>
      <div class="flex justify-content-center m-4">
        <ui-input-button label="Crear Factura"></ui-input-button>
      </div>
    </form>
  `,
  styles: [],
})
export class AddStockComponent
  extends abstractForm
  implements OnInit, OnDestroy
{
  subscriptions$: Subscription = new Subscription();
  productSelected!: Product;
  depotSelected!: Depot;
  ref!: DynamicDialogRef;
  constructor(
    fb: FormBuilder,
    private toastService: ToastMessageService,
    public reference: DynamicDialogRef,
    public config: DynamicDialogConfig,
    protected dialogService: DialogService,
    private productService: ProductService,
    private stockService: StockService
  ) {
    super(fb);
  }
  ngOnDestroy(): void {
    this.subscriptions$.unsubscribe();
  }
  ngOnInit(): void {
    this.createForm({
      quantity: [null, Validators.required],
    });
    this.depotSelected = this.config.data;
    console.log(this.depotSelected);
  }
  getDialog() {
    this.ref = this.dialogService.open(ChooseProductsComponent, {
      header: `Seleccionar Producto`,
      width: '60%',
      data: this.formGroup.get('branch')?.value,
      maximizable: true,
    });
    this.ref.onClose
      .pipe(
        map((response: Product) => {
          this.productSelected = response;
        })
      )
      .subscribe();
  }
  override submit(): void {
    this.formGroup.markAsDirty();
    this.formGroup.markAllAsTouched();
    if (!this.formGroup.valid) {
      console.log(this.productSelected.id);
      this.toastService.showError(
        'Error en formulario',
        'Debe completar todos los campos para registrar un Stock'
      );
      return;
    }
    let newStock: Stock = {
      depot_id: this.depotSelected.id,
      product_id: this.productSelected.id,
      quantity: this.formGroup.controls['quantity'].value,
    } as Stock;
    this.subscriptions$.add(
      this.stockService
        .post(newStock, {
          depot_id: this.depotSelected.id,
          product_id: this.productSelected.id,
        })
        .pipe(
          map((response) => {
            this.toastService.showSuccess('¡Stock añadido con Exito!');
            this.reference.close();
          })
        )
        .subscribe()
    );
  }
}
