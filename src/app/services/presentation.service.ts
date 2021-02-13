import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080/presentation_api/v1/presentation';

@Injectable({
  providedIn: 'root'
})
export class PresentationService {

  constructor(private http: HttpClient) { }

  getCommissionDescription() : Observable<any>{
    return this.http.get<any>(`${baseUrl}/commissiondesciption/1`);
  }

  getMinistre() : Observable<any>{
    return this.http.get<any>(`${baseUrl}/ministre/1`);
  }
}
