import { Component } from '@angular/core';
import { Column } from 'src/app/core/interfaces/Column.interface';
import { Client } from 'src/app/models/Client.interface';
import { Employee } from 'src/app/models/Employee.interface';
import { Receipt } from 'src/app/models/Receipt.interface';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.scss'],
})
export class ReceiptComponent {
  cols: Column[] = [
    { header: 'N° de Factura', field: 'number' } as Column,
    { header: 'Fecha', field: 'registerDate',pipe: 'date' } as Column,
    { header: 'Empleado', field: 'employee' } as Column,
    { header: 'Cliente', field: 'client' } as Column,
    { header: 'Total', field: 'subTotal',pipe:'currency' } as Column,
  ];
  items: Receipt[] = [
    {
      id: 21312,
      client: {} as Client,
      number: '1029384728',
      registerDate: new Date(),
      subTotal: 200,
      employee: {} as Employee,
    } as Receipt,
    {
      id: 21312,
      client: {} as Client,
      number: '1029384728',
      registerDate: new Date(),
      subTotal: 200,
      employee: {} as Employee,
    } as Receipt,
    {
      id: 21312,
      client: {} as Client,
      number: '1029384728',
      registerDate: new Date(),
      subTotal: 200,
      employee: {} as Employee,
    } as Receipt,
  ];
}
