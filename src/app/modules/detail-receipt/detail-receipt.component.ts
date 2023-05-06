import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { ReceiptService } from 'src/app/services/receipt.service';
import { Receipt } from 'src/app/models/Receipt.interface';
import { Observable, Subscription, map } from 'rxjs';
import { UiCrudTableComponent } from 'src/app/shared/ui-crud-table/ui-crud-table.component';
import { Column } from 'src/app/core/interfaces/Column.interface';

@Component({
  selector: 'app-detail-receipt',
  standalone: true,
  imports: [CommonModule, UiCrudTableComponent],
  templateUrl: './detail-receipt.component.html',
  styleUrls: ['./detail-receipt.component.scss'],
})
export class DetailReceiptComponent implements OnInit,OnDestroy {
  receipt_details: Receipt = {} as Receipt;
  subscriptions$: Subscription = new Subscription();
  receipt!: Receipt;
  cols: Column[] = [
    { header: 'ID', field: 'id', pipe: 'index' } as Column,
    { header: 'Cantidad', field: 'quantity' } as Column,
    { header: 'Producto', field: 'product', subField: 'name',pipe: 'titlecase' } as Column,
    { header: 'Precio', field: 'unitPrice', pipe: 'currency' } as Column,
    { header: 'Sub-Total', field: 'subTotal', pipe: 'currency' } as Column,
  ];
  constructor(
    public config: DynamicDialogConfig,
    private receiptService: ReceiptService
  ) {}
  ngOnDestroy(): void {
    this.subscriptions$.unsubscribe();
  }
  ngOnInit(): void {
    this.receipt = this.config.data;
    this.subscriptions$.add(
      this.receiptService.getId(this.receipt.id).pipe(
        map((response)=>{
          this.receipt_details = response;
        })
      ).subscribe()
    );
  }
}
