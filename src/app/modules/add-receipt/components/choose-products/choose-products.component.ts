import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiCrudTableComponent } from 'src/app/shared/ui-crud-table/ui-crud-table.component';
import { Column } from 'src/app/core/interfaces/Column.interface';
import { ProductService } from 'src/app/services/product.service';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/Product.interface';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-choose-products',
  standalone: true,
  imports: [CommonModule, UiCrudTableComponent],
  template: `
    <div>
      <ui-crud-table
        [chooseOnly]="false"
        searchPlaceholder="Buscar Producto..."
        oneMoreTooltip="Agregar"
        [cols]="cols"
        [globalFilterFields]="['name']"
        [items]="(products$ | async)!"
        (returnItem)="closeDialog($event)"
      ></ui-crud-table>
    </div>
  `,
  styles: [],
})
export class ChooseProductsComponent implements OnInit {
  products$!: Observable<Product[]>;
  cols: Column[] = [
    { header: 'ID', field: 'id', pipe: 'index' } as Column,
    { header: 'Nombre', field: 'name' } as Column,
    { header: 'Descripción', field: 'description' } as Column,
    { header: 'Precio', field: 'price', pipe: 'currency' } as Column,
  ];
  ngOnInit(): void {}
  constructor(
    private productService: ProductService,
    public ref: DynamicDialogRef
  ) {
    this.products$ = this.productService.get();
  }
  closeDialog(item : Product){
    console.log(item);

    this.ref.close(item);
  }
}
