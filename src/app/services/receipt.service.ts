import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { pathnameEnum } from '../project/enums/pathname.enum';
import { Observable, map } from 'rxjs';
import { Receipt } from '../models/Receipt.interface';
import { CustomerService } from './customer.service';
import { Customer } from '../models/Customer.interface';

@Injectable({
  providedIn: 'root',
})
export class ReceiptService extends BaseService {
  override serverUrl = `${environment.apiUrl}${pathnameEnum.receipt}`;
  constructor(
    httpClient: HttpClient,
    private customerService: CustomerService
  ) {
    super(httpClient);
  }
  override get(params = {}): Observable<any[]> {
    const url = `${environment.apiUrl}${pathnameEnum.receipts}`;
    return this.httpClient.get<Receipt[]>(url, { params }).pipe(
      map((receipts) => {
        for (const receipt of receipts) {
          this.customerService
            .getId(receipt.customer_id)
            .pipe(
              map((customer: Customer) => {
                receipt.customerName = customer.lastName+', '+customer.name;
                receipt.customer = customer;
              })
            )
            .subscribe();
        }
        return receipts;
      })
    );
  }
}
