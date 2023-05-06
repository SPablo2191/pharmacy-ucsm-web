import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { ReceiptService } from 'src/app/services/receipt.service';
import { Receipt } from 'src/app/models/Receipt.interface';
import { Observable } from 'rxjs';
import { UiCrudTableComponent } from 'src/app/shared/ui-crud-table/ui-crud-table.component';
import { Column } from 'src/app/core/interfaces/Column.interface';

@Component({
  selector: 'app-detail-receipt',
  standalone: true,
  imports: [CommonModule, UiCrudTableComponent],
  templateUrl: './detail-receipt.component.html',
  styleUrls: ['./detail-receipt.component.scss'],
})
export class DetailReceiptComponent implements OnInit {
  receiptDetailed$!: Observable<Receipt>;
  receipt!: Receipt;
  cols: Column[] = [
    { header: 'ID', field: 'index',pipe :'index' } as Column,
    { header: 'Cantidad', field: 'quantity'} as Column,
    { header: 'Producto', field: 'product',subField:'name'} as Column,
    { header: 'Precio', field: 'unitPrice', pipe: 'currency' } as Column,
    { header: 'Sub-Total', field: 'subTotal', pipe: 'currency' } as Column,
  ];
  constructor(
    public config: DynamicDialogConfig,
    private receiptService: ReceiptService
  ) {}
  ngOnInit(): void {
    this.receipt = this.config.data;
    this.receiptDetailed$ = this.receiptService.getId(this.config.data.id);
  }
}
