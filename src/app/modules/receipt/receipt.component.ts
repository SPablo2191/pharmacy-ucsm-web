import { Component } from '@angular/core';
import { Column } from 'src/app/core/interfaces/Column.interface';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.scss']
})
export class ReceiptComponent {
  cols : Column[] = [
    {header:'N° de Factura', field:'number'} as Column,
    {header:'Fecha', field:'registerDate'} as Column,
    {header:'Empleado', field:'idEmployee'} as Column,
    {header:'Acciones', field:''} as Column,
  ];
}
