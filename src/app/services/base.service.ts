import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class BaseService {
   serverUrl : string | undefined
   constructor(protected httpClient: HttpClient){}
   get(params = {}) : Observable<any []> {
    const url = `${this.serverUrl}`
    return this.httpClient.get<any []>(url,{params});
  }
  post(data : any){
    return this.httpClient.post(this.serverUrl!,data);
  }
  getId(id : number) : Observable<any []> {
    const url = `${this.serverUrl}/${id}`
    return this.httpClient.get<any []>(url);
  }
}
