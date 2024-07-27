import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  private apiUrl = 'http://localhost:3000/api/convert';

  constructor(private http: HttpClient) {}

  getConversionRate(from: string, to: string): Observable<any> {
    let params = new HttpParams().set('from', from).set('to', to);
    return this.http.get(this.apiUrl, { params });
  }
}
