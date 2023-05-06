import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { pathnameEnum } from '../project/enums/pathname.enum';

@Injectable({
  providedIn: 'root'
})
export class ReceiptService extends BaseService{
  override serverUrl = `${environment.apiUrl}${pathnameEnum.movies}`;
  constructor(httpClient: HttpClient) {
    super(httpClient);
  }
}
