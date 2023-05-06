import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { pathnameEnum } from '../project/enums/pathname.enum';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService extends BaseService {
  override serverUrl = `${environment.apiUrl}${pathnameEnum.product}`;
  constructor(httpClient: HttpClient) {
    super(httpClient);
  }
  override get(params = {}) : Observable<any []> {
    const url = `${environment.apiUrl}${pathnameEnum.products}`
    return this.httpClient.get<any []>(url,{params});
  }
}
