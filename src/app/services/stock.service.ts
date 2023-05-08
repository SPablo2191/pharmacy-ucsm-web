import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { environment } from 'src/environments/environment';
import { pathnameEnum } from '../project/enums/pathname.enum';
import { Stock } from '../models/Stock.interface';
import { Observable, map } from 'rxjs';
import { ProductService } from './product.service';
import { Product } from '../models/Product.interface';

@Injectable({
  providedIn: 'root',
})
export class StockService extends BaseService {
  override serverUrl = `${environment.apiUrl}${pathnameEnum.stocks}`;
  constructor(httpClient: HttpClient, private productService: ProductService) {
    super(httpClient);
  }
  override get(params = {}): Observable<any[]> {
    return this.httpClient.get<Stock[]>(this.serverUrl, { params }).pipe(
      map((stocks) => {
        for (const stock of stocks) {
          this.productService.getId(stock.product_id).pipe(
            map((product : Product) => {
              stock.product = product;
            })
          )
          .subscribe();
        };
        return stocks;
      })
    );
  }
  override post(data: any,params : any = {}) {
    return this.httpClient.post(this.serverUrl, data, { params });
  }
}
