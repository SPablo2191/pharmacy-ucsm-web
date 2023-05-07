import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { environment } from 'src/environments/environment';
import { pathnameEnum } from '../project/enums/pathname.enum';

@Injectable({
  providedIn: 'root'
})
export class StockService extends BaseService {
  override serverUrl = `${environment.apiUrl}${pathnameEnum.stocks}`;
  constructor(httpClient: HttpClient) {
    super(httpClient);
  }
}
