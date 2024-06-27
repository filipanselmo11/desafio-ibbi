import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoryRequest, CategoryResponse } from '../types/category';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  baseURL = 'http://127.0.0.1:8000';

  constructor(private httpClient: HttpClient) { }

  createCategory(description: string): Observable<CategoryRequest> {
    return this.httpClient.post<CategoryRequest>(`${this.baseURL}/category/create`, {
      description
    });
  }

  getCategories(): Observable<CategoryResponse[]> {
    return this.httpClient.get<CategoryResponse[]>(`${this.baseURL}/category/categories`);
  }
}
