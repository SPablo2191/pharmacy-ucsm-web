import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { UiInputNumberComponent } from 'src/app/shared/ui-input-number/ui-input-number.component';
import { UiInputTextComponent } from 'src/app/shared/ui-input-text/ui-input-text.component';
import { abstractForm } from 'src/app/core/classes/abstract-form';
import { UiInputButtonComponent } from 'src/app/shared/ui-input-button/ui-input-button.component';
import { ToastMessageService } from 'src/app/core/services/toast-message.service';
import { Product } from 'src/app/models/Product.interface';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { ProductService } from 'src/app/services/product.service';
import { Subscription, map } from 'rxjs';

@Component({
  selector: 'add-product',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UiInputNumberComponent,
    UiInputTextComponent,
    UiInputButtonComponent,
  ],
  template: `
    <form [formGroup]="formGroup" (ngSubmit)="submit()">
      <ui-input-text
        [group]="formGroup"
        name="name"
        label="Nombre"
        customClass="w-full"
      ></ui-input-text>
      <ui-input-text
        [group]="formGroup"
        name="description"
        label="Descripción"
        customClass="w-full"
      ></ui-input-text>
      <ui-input-number
        [group]="formGroup"
        name="price"
        label="Precio"
      ></ui-input-number>
      <div class="flex justify-content-center m-4">
        <ui-input-button label="Crear Factura"></ui-input-button>
      </div>
    </form>
  `,
  styles: [],
})
export class AddProductComponent extends abstractForm implements OnInit, OnDestroy {
  subscriptions$ : Subscription = new Subscription();
  constructor(
    fb: FormBuilder,
    private toastService: ToastMessageService,
    public ref: DynamicDialogRef,
    private productService : ProductService
  ) {
    super(fb);
  }
  ngOnDestroy(): void {
    this.subscriptions$.unsubscribe();
  }
  ngOnInit(): void {
    this.createForm({
      name: [null, Validators.required],
      description: [null, Validators.required],
      price: [null, Validators.required],
    });
  }
  override submit(): void {
    this.formGroup.markAsDirty();
    this.formGroup.markAllAsTouched();
    if (!this.formGroup.valid) {
      this.toastService.showError(
        'Error en formulario',
        'Debe completar todos los campos para registrar un Producto'
      );
      return;
    }
    let product: Product = {
      name: this.formGroup.controls['name'].value,
      description: this.formGroup.controls['description'].value,
      price: this.formGroup.controls['price'].value,
    } as Product;
    this.subscriptions$.add(this.productService.post(product).pipe(
      map((response)=>{
        this.toastService.showSuccess('¡Producto añadido con Exito!');
        this.ref.close();
      })
    ).subscribe());
  }
}
