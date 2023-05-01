import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { Column } from 'src/app/core/interfaces/Column.interface';
@Component({
  selector: 'ui-crud-table',
  standalone: true,
  imports: [CommonModule, TableModule],
  template: `
<p-table [columns]="cols" [value]="items" [tableStyle]="{ 'min-width': '50rem' }">
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
                {{ rowData[col.field] }}
            </td>
        </tr>
    </ng-template>
</p-table>

  `,
  styles: [
  ]
})
export class UiCrudTableComponent {
  @Input() items! : any[];
  @Input() cols! : Column[];
}
