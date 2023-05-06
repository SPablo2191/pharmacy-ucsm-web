import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { pathnameEnum } from '../project/enums/pathname.enum';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends BaseService{
  override serverUrl = `${environment.apiUrl}${pathnameEnum.product}`;
  constructor(httpClient: HttpClient) {
    super(httpClient);
  }
}
