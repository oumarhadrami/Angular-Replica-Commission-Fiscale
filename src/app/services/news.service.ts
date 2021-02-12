import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080/news_api/v1/news/';
@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getNewsListWithPageAndSize(params: any): Observable<any> {
    return this.http.get<any>(baseUrl, { params });
  }
}
