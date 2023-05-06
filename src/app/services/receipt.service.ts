import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { pathnameEnum } from '../project/enums/pathname.enum';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReceiptService extends BaseService{
  override serverUrl = `${environment.apiUrl}${pathnameEnum.receipt}`;
  constructor(httpClient: HttpClient) {
    super(httpClient);
  }
  override get(params = {}) : Observable<any []> {
    const url = `${environment.apiUrl}${pathnameEnum.receipts}`
    return this.httpClient.get<any []>(url,{params});
  }
}
