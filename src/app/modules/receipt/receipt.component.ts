import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, map } from 'rxjs';
import { Column } from 'src/app/core/interfaces/Column.interface';
import { Customer } from 'src/app/models/Customer.interface';
import { Receipt } from 'src/app/models/Receipt.interface';
import { CustomerService } from 'src/app/services/customer.service';
import { ReceiptService } from 'src/app/services/receipt.service';
import { DetailReceiptComponent } from '../detail-receipt/detail-receipt.component';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.scss'],
})
export class ReceiptComponent implements OnInit {
  items$!: Observable<Receipt[]>;
  detailComponent : any = DetailReceiptComponent;
  cols: Column[] = [
    { header: 'N° de Factura', field: 'number' } as Column,
    { header: 'Fecha', field: 'registerDate', pipe: 'date' } as Column,
    { header: 'Cliente', field: 'customerName', pipe: 'titlecase' } as Column,
    { header: 'Total', field: 'total', pipe: 'currency' } as Column,
  ];
  ngOnInit(): void {
    this.getReceipts();
  }
  constructor(
    private receiptService: ReceiptService,
    private customerService: CustomerService
  ) {}
  getReceipts() {
    this.items$ = this.receiptService.get();
  }
}
