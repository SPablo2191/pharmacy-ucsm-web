import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, map } from 'rxjs';
import { Column } from 'src/app/core/interfaces/Column.interface';
import { Customer } from 'src/app/models/Customer.interface';
import { Receipt } from 'src/app/models/Receipt.interface';
import { CustomerService } from 'src/app/services/customer.service';
import { ReceiptService } from 'src/app/services/receipt.service';
import { DetailReceiptComponent } from '../detail-receipt/detail-receipt.component';
import { ToastMessageService } from 'src/app/core/services/toast-message.service';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.scss'],
})
export class ReceiptComponent implements OnInit, OnDestroy {
  items$!: Observable<Receipt[]>;
  detailComponent: any = DetailReceiptComponent;
  subscriptions$: Subscription = new Subscription();
  cols: Column[] = [
    { header: 'N° de Factura', field: 'number' } as Column,
    { header: 'Fecha', field: 'registerDate', pipe: 'date' } as Column,
    { header: 'Cliente', field: 'customerName', pipe: 'titlecase' } as Column,
    { header: 'Total', field: 'total', pipe: 'currency' } as Column,
  ];
  constructor(
    private receiptService: ReceiptService,
    private customerService: CustomerService,
    private toastService : ToastMessageService
  ) {}
  ngOnInit(): void {
    this.getReceipts();
  }

  ngOnDestroy(): void {
    this.subscriptions$.unsubscribe();
  }
  getReceipts() {
    this.items$ = this.receiptService.get();
  }
  deleteReceipt(id: number) {
    this.subscriptions$.add(this.receiptService.delete(id).pipe(
      map((response)=>{
        this.toastService.showSuccess('¡Se elimino la factura con exito!')
      })
    ).subscribe());
  }
}
