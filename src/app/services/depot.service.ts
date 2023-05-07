import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { environment } from 'src/environments/environment';
import { pathnameEnum } from '../project/enums/pathname.enum';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepotService  extends BaseService{
  override serverUrl = `${environment.apiUrl}${pathnameEnum.depots}`;
  constructor(httpClient: HttpClient) {
    super(httpClient);
  }
  override getId(id: number): Observable<any> {
    const url = `${environment.apiUrl}${pathnameEnum.branch}/${id}/${pathnameEnum.depots}`;
    return this.httpClient.get<any>(url);
  }
}
