import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { Column } from 'src/app/core/interfaces/Column.interface';
import { TooltipModule } from 'primeng/tooltip';
@Component({
  selector: 'ui-crud-table',
  standalone: true,
  imports: [CommonModule, TableModule, TooltipModule],
  template: `
    <p-table
      [columns]="cols"
      [value]="items"
      responsiveLayout="stack"
      [breakpoint]="'960px'"
      [tableStyle]="{ 'min-width': '50rem' }"
    >
      <ng-template pTemplate="header" let-columns>
        <tr>
          <th *ngFor="let col of columns">
            {{ col.header }}
          </th>
        </tr>
      </ng-template>
      <ng-template pTemplate="body" let-rowData let-columns="columns">
        <tr>
          <td *ngFor="let col of columns">
            <span class="p-column-title font-bold">{{ col.header }}</span>
            <span>{{ rowData[col.field] }}</span>
          </td>
          <td class="flex justify-content-center">
            <button
              pButton
              pRipple
              tooltipPosition="top"
              [pTooltip]="detailTooltip"
              (click)="read(rowData)"
              icon="pi pi-search"
              class="p-button-rounded p-button-info mr-2"
            ></button>
            <button
              pButton
              pRipple
              tooltipPosition="top"
              [pTooltip]="editTooltip"
              (click)="update(rowData.id)"
              icon="pi pi-pencil"
              class="p-button-rounded p-button-success mr-2"
            ></button>
            <button
              pButton
              pRipple
              tooltipPosition="top"
              [pTooltip]="deleteTooltip"
              (click)="delete(rowData.id)"
              icon="pi pi-trash"
              class="p-button-rounded p-button-warning mr-2"
            ></button>
          </td>
        </tr>
      </ng-template>
    </p-table>
  `,
  styles: [],
})
export class UiCrudTableComponent {
  @Input() items!: any[];
  @Input() cols!: Column[];
  @Input() deleteTooltip!: string;
  @Input() editTooltip!: string;
  @Input() detailTooltip!: string;
  read(_t13: any) {
    throw new Error('Method not implemented.');
  }
  delete(arg0: any) {
    throw new Error('Method not implemented.');
  }
  update(arg0: any) {
    throw new Error('Method not implemented.');
  }
}
