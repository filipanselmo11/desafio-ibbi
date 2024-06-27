import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest } from '../types/login';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseURL = 'http://127.0.0.1:8000'

  constructor(private httpClient: HttpClient) { }

  loginUser(username: string, password: string): Observable<LoginRequest> {
    const formData: FormData = new FormData();
    formData.append('username', username);
    formData.append('password', password);
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    return this.httpClient.post<LoginRequest>(`${this.baseURL}/user/login`, {
      formData
    },{
      headers: headers
    });
  }
}
