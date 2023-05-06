import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { ReceiptService } from 'src/app/services/receipt.service';
import { Receipt } from 'src/app/models/Receipt.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-detail-receipt',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail-receipt.component.html',
  styleUrls: ['./detail-receipt.component.scss']
})
export class DetailReceiptComponent implements OnInit {
  receiptDetailed$! : Observable<Receipt>;
  receipt! : Receipt;
  constructor(
    public config: DynamicDialogConfig,
    private receiptService: ReceiptService
  ){}
  ngOnInit(): void {
    this.receipt = this.config.data;
    this.receiptDetailed$ = this.receiptService.getId(this.config.data.id);
  }

}
