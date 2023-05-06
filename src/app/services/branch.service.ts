import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { pathnameEnum } from '../project/enums/pathname.enum';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Branch } from '../models/Branch.interface';

@Injectable({
  providedIn: 'root',
})
export class BranchService extends BaseService {
  override serverUrl = `${environment.apiUrl}${pathnameEnum.branch}`;
  constructor(httpClient: HttpClient) {
    super(httpClient);
  }
  override get(params = {}): Observable<Branch[]> {
    const url = `${environment.apiUrl}${pathnameEnum.branchs}`;
    return this.httpClient.get<Branch[]>(url, { params }).pipe(
      map((branches: Branch[]) => {
        for (const branch of branches) {
          branch.fullName = `${branch.name} - ${branch.address}`;
        }
        return branches;
      })
    );
  }
}
