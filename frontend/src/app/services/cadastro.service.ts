import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CadastroRequest } from '../types/cadastro';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  baseURL = 'http://127.0.0.1:8000';

  constructor(private httpClient: HttpClient) { }

  createUser(name: string, username: string, password: string): Observable<CadastroRequest> {
    return this.httpClient.post<CadastroRequest>(`${this.baseURL}/user/create`, {
      name,
      username,
      password
    })
  }

}
