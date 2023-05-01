import { Component } from '@angular/core';
import { Column } from 'src/app/core/interfaces/Column.interface';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent {
  cols : Column[] = [
    {} as Column
  ];
}
