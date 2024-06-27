import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductRequest, ProductResponse } from '../types/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseURL = 'http://127.0.0.1:8000';

  constructor(private httpClient: HttpClient) { }

  createProduct(description: string, price: string, amount: number, category_id: number, image: string): Observable<ProductRequest> {
    return this.httpClient.post<ProductRequest>(`${this.baseURL}/product/create`, {
      description,
      price,
      amount,
      category_id,
      image
    });
  }

  getproducts(): Observable<ProductResponse[]> {
    return this.httpClient.get<ProductResponse[]>(`${this.baseURL}/product/products`);
  }
}
