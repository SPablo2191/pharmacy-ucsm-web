import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { environment } from 'src/environments/environment';
import { pathnameEnum } from '../project/enums/pathname.enum';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService extends BaseService {
  override serverUrl = `${environment.apiUrl}${pathnameEnum.customer}`;
  constructor(httpClient: HttpClient) {
    super(httpClient);
  }
  override get(params = {}) : Observable<any []> {
    const url = `${environment.apiUrl}${pathnameEnum.customers}`
    return this.httpClient.get<any []>(url,{params});
  }
  override post(data: any) {
    const url = `${environment.apiUrl}${pathnameEnum.customers}`
    return this.httpClient.post(url, data);
  }
}
