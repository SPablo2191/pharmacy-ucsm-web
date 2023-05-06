import { Component } from '@angular/core';
import { Column } from 'src/app/core/interfaces/Column.interface';
import { Receipt } from 'src/app/models/Receipt.interface';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.scss'],
})
export class ReceiptComponent {
  cols: Column[] = [
    { header: 'N° de Factura', field: 'number' } as Column,
    { header: 'Fecha', field: 'registerDate', pipe: 'date' } as Column,
    { header: 'Cliente', field: 'client' } as Column,
    { header: 'Total', field: 'total', pipe: 'currency' } as Column,
  ];
  items: Receipt[] = [];
}
