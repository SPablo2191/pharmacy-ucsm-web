import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { Column } from 'src/app/core/interfaces/Column.interface';
import { TooltipModule } from 'primeng/tooltip';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { Modal } from 'src/app/core/classes/Modal';
import { DialogService } from 'primeng/dynamicdialog';
import { BaseModel } from 'src/app/models/BaseModel.interface';
import { FormGroup, FormsModule } from '@angular/forms';
import { ConfirmationService } from 'primeng/api';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'ui-crud-table',
  standalone: true,
  imports: [
    CommonModule,
    TableModule,
    TooltipModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    RouterModule
  ],

  template: `
    <p-table
      #crudTable
      [columns]="cols"
      [value]="items"
      responsiveLayout="stack"
      [breakpoint]="'960px'"
      [globalFilterFields]="globalFilterFields"
      [tableStyle]="tableStyle"
    >
      <ng-template pTemplate="caption" *ngIf="readOnly">
        <div class="flex md:flex justify-content-center align-content-center">
          <div class="col">
            <div
              class="flex align-content-center justify-content-center lg:justify-content-start"
            >
              <!-- <button
                pButton
                pRipple
                label="Nuevo"
                [pTooltip]="addTooltip"
                tooltipPosition="top"
                icon="pi pi-plus"
                (click)="add()"
                class="p-button-success"
                *ngIf="chooseOnly"
              ></button> -->
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
          <th class="text-center" *ngIf="readOnly && chooseOnly">Acciones</th>
          <th *ngIf="writable">{{ writableLabel }}</th>
          <th *ngIf="writable">Total</th>
          <th *ngIf="!chooseOnly">Acción</th>
        </tr>
      </ng-template>
      <ng-template pTemplate="body" let-rowData let-columns="columns">
        <tr>
          <td *ngFor="let col of columns; let i = index" class="text-center">
            <span class="p-column-title font-bold">{{ col.header }}</span>
            <div [ngSwitch]="col.pipe" v *ngIf="rowData[col.field]">
              <p *ngSwitchCase="'index'">
                {{ i + 1 }}
              </p>
              <p *ngSwitchCase="'date'">
                {{
                  col.subField
                    ? rowData[col.field][col.subField]
                    : (rowData[col.field] | date : 'dd/MM/yyyy')
                }}
              </p>
              <p *ngSwitchCase="'titlecase'">
                {{
                  col.subField
                    ? rowData[col.field][col.subField]
                    : (rowData[col.field] | titlecase)
                }}
              </p>
              <p *ngSwitchCase="'currency'">
                {{
                  col.subField
                    ? rowData[col.field][col.subField]
                    : (rowData[col.field] | currency)
                }}
              </p>
              <p *ngSwitchDefault>
                {{
                  col.subField
                    ? rowData[col.field][col.subField]
                    : rowData[col.field]
                }}
              </p>
            </div>
          </td>
          <td *ngIf="writable">
            <input
              #inputCant
              type="text"
              pInputText
              min="0"
              [(ngModel)]="rowData['quantitySelected']"
              oninput="validity.valid||(value='');"
            />
          </td>
          <td *ngIf="writable">
            <p>{{ this.total }}</p>
          </td>
          <td *ngIf="readOnly && chooseOnly">
            <div class="flex justify-content-center w-full">
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
                (click)="delete(rowData.id,table)"
                icon="pi pi-trash"
                class="p-button-rounded p-button-warning mr-2"
              ></button>
            </div>
          </td>
          <td *ngIf="!chooseOnly">
            <div class="flex justify-content-center w-full">
              <button
                pButton
                pRipple
                tooltipPosition="top"
                icon="pi pi-plus"
                [pTooltip]="oneMoreTooltip"
                (click)="saveItem(rowData)"
                class="p-button-rounded p-button-success mr-2"
              ></button>
            </div>
          </td>
        </tr>
      </ng-template>
    </p-table>
  `,
  styles: [],
})
export class UiCrudTableComponent extends Modal {
  @Input() items!: any[];
  @Input() cols!: Column[];
  @Input() deleteTooltip!: string;
  @Input() editTooltip!: string;
  @Input() detailTooltip!: string;
  @Input() addTooltip!: string;
  @Input() searchPlaceholder!: string;
  @Input() globalFilterFields: string[] = [];
  @Input() detailComponent!: any;
  @Input() detailTitle!: string;
  @Input() readOnly: boolean = true;
  @Input() writableLabel!: string;
  @Input() writable: boolean = false;
  @Input() chooseOnly: boolean = true;
  @Input() tableStyle: any = { 'min-width': '10rem' };
  @Input() oneMoreTooltip!: string;
  @Input() table!: string;
  @Input() path!: string;
  @Output() returnItem = new EventEmitter<any>();
  @Output() returnValue = new EventEmitter<number>();
  @Output() message : EventEmitter<number> = new EventEmitter<number>();
  total: number = 0;
  @Output() totalEmitter = new EventEmitter<number>()
  constructor(
    dialogService: DialogService,
    confirmationService: ConfirmationService,
    private router : Router
  ) {
    super(dialogService, confirmationService);
  }
  add(){
    if(this.path){
      this.router.navigate([this.path]);
    }
  }
  read(data: BaseModel) {
    this.getDialog(
      this.detailComponent,
      this.detailTitle + ` #${data.id}`,
      data
    );
  }
  delete(id: number,table : string) {
    this.confirmationService.confirm({
      header : `Eliminar ${table}`,
      message: `¿Estás seguro que deseas eliminar este item # ${id}?`,
      accept: () => {
        this.message.emit(id);
      },
    });
  }
  update(arg0: any) {
    throw new Error('Method not implemented.');
  }
  saveItem(item: any) {
    this.returnItem.emit(item);
  }
}
