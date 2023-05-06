import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Column } from 'src/app/core/interfaces/Column.interface';
import { Receipt } from 'src/app/models/Receipt.interface';
import { ReceiptService } from 'src/app/services/receipt.service';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.scss'],
})
export class ReceiptComponent implements OnInit {
  ngOnInit(): void {
    this.items$ = this.receiptService.get();
  }
  constructor(private receiptService : ReceiptService){}
  cols: Column[] = [
    { header: 'N° de Factura', field: 'number' } as Column,
    { header: 'Fecha', field: 'registerDate', pipe: 'date' } as Column,
    { header: 'Cliente', field: 'client' } as Column,
    { header: 'Total', field: 'total', pipe: 'currency' } as Column,
  ];
  items$! : Observable<Receipt[]>;

}
