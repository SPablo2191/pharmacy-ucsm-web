import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiCrudTableComponent } from 'src/app/shared/ui-crud-table/ui-crud-table.component';
import { Column } from 'src/app/core/interfaces/Column.interface';

@Component({
  selector: 'app-choose-products',
  standalone: true,
  imports: [CommonModule, UiCrudTableComponent],
  template: `
    <div>
      <ui-crud-table
        [chooseOnly]="false"
        searchPlaceholder="Buscar Producto"
        oneMoreTooltip="Agregar"
        [cols]="cols"
      ></ui-crud-table>
    </div>
  `,
  styles: [],
})
export class ChooseProductsComponent implements OnInit {
  cols: Column[] = [
    { header: 'ID', field: 'id', pipe: 'index' } as Column,
    { header: 'Nombre', field: 'unitPrice' } as Column,
    { header: 'Descripción', field: 'description' } as Column,
    { header: 'Precio', field: 'price', pipe: 'currency' } as Column,
  ];
  ngOnInit(): void {}
}
