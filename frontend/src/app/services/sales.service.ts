import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SalesResponse } from '../types/sales';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  baseURL = 'http://127.0.0.1:8000';

  constructor(private httpClient: HttpClient) { }

  getSales(): Observable<SalesResponse[]>{
    return this.httpClient.get<SalesResponse[]>(
      `${this.baseURL}/sale/sales`
    );
  }


}
