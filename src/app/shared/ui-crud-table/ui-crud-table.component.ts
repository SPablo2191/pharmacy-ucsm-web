import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { Column } from 'src/app/core/interfaces/Column.interface';
import { TooltipModule } from 'primeng/tooltip';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
@Component({
  selector: 'ui-crud-table',
  standalone: true,
  imports: [
    CommonModule,
    TableModule,
    TooltipModule,
    ButtonModule,
    InputTextModule,
  ],
  template: `
    <p-table
      #crudTable
      [columns]="cols"
      [value]="items"
      responsiveLayout="stack"
      [breakpoint]="'960px'"
      [globalFilterFields]="globalFilterFields"
      [tableStyle]="{ 'min-width': '10rem' }"
    >
      <ng-template pTemplate="caption">
        <div class="flex md:flex justify-content-center align-content-center">
          <div class="col">
            <div
              class="flex align-content-center justify-content-center lg:justify-content-start"
            >
              <button
                pButton
                pRipple
                label="Nuevo"
                [pTooltip]="addTooltip"
                tooltipPosition="top"
                icon="pi pi-plus"
                class="p-button-success"
              ></button>
            </div>
          </div>
          <div class="col">
            <span class="p-input-icon-right flex justify-content-end">
              <i class="pi pi-search"></i>
              <input
                type="text"
                class="w-full"
                pInputText
                (input)="
                  crudTable.filterGlobal($any($event.target).value, 'contains')
                "
                [placeholder]="searchPlaceholder"
              />
            </span>
          </div>
        </div>
      </ng-template>
      <ng-template pTemplate="header" let-columns>
        <tr>
          <th *ngFor="let col of columns" class="text-center">
            {{ col.header }}
          </th>
          <th class="text-center">Acciones</th>
        </tr>
      </ng-template>
      <ng-template pTemplate="body" let-rowData let-columns="columns">
        <tr>
          <td *ngFor="let col of columns" class="text-center">
            <span class="p-column-title font-bold">{{ col.header }}</span>
            <div [ngSwitch]="col.pipe">
              <p *ngSwitchCase="'date'">
                {{
                  col.subField
                    ? rowData[col.field][col.subField]
                    : (rowData[col.field] | date : 'dd/MM/yyyy')
                }}
              </p>
              <p *ngSwitchCase="'currency'">
                {{
                  col.subField
                    ? rowData[col.field][col.subField]
                    : (rowData[col.field] | currency)
                }}
              </p>
              <p *ngSwitchDefault>{{ rowData[col.field] }}</p>
            </div>
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
  @Input() addTooltip!: string;
  @Input() searchPlaceholder!: string;
  @Input() globalFilterFields : string[] = [];
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
