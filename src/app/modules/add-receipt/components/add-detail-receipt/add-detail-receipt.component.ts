import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { Product } from 'src/app/models/Product.interface';
import { InputTextModule } from 'primeng/inputtext';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'add-detail-receipt',
  standalone: true,
  imports: [
    CommonModule,
    TableModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  template: `
    <!-- Contenido de la pagina -->

    <p-table
      #dt
      [value]="products"
      [rows]="5"
      [paginator]="true"
      responsiveLayout="stack"
      [rowHover]="true"
      dataKey="idProveedor"
      [showCurrentPageReport]="false"
    >
      <!-- tabla -->
      <ng-template pTemplate="header" let-columns>
        <tr>
          <th>Nombre</th>
          <th>Descripción</th>
          <th>Precio</th>
          <th>Cantidad</th>
          <th>SubTotal</th>
        </tr>
      </ng-template>
      <ng-template pTemplate="body" let-product let-columns="columns">
        <tr>
          <td>
            <span class="p-column-title font-bold">Nombre</span
            >{{ product.name }}
          </td>
          <td>
            <span class="p-column-title font-bold">Telefono</span
            >{{ product.description }}
          </td>
          <td>
            <span class="p-column-title font-bold">Correo</span
            >{{ product.price | currency }}
          </td>
          <td>
            <span class="p-column-title font-bold">Cantidad</span>
            <input
              #inputCant
              type="number"
              pInputText
              min="0"
              [(ngModel)]="product.quantitySelected"
              oninput="validity.valid||(value='');"
              (change)="getTotal(product)"
            />
          </td>
          <td>
            <span class="p-column-title font-bold">Sub-Total</span>
            {{ product.subTotal | currency }}
          </td>
        </tr>
      </ng-template>
      <ng-template pTemplate="summary">
        <div class="text-right">
          Total: {{ total | currency }}
        </div>
      </ng-template>
    </p-table>
  `,
  styles: [],
})
export class AddDetailReceiptComponent {
  @Input() products!: Product[];
  @Input() group!: FormGroup;
  total: number = 0;
  getTotal(product: Product) {
    let index = this.products.indexOf(product);
    this.products[index].subTotal = product.quantitySelected * product.price;
    let cont: number = 0;
    this.products.forEach((product) => (cont += product.subTotal));
    this.total = cont;
    this.group.get('total')?.setValue(this.total);
  }
}
