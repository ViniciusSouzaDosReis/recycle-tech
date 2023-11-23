// cep.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CepService {
  private apiUrl = 'https://viacep.com.br/ws/';

  constructor(private http: HttpClient) {}

  getCepData(cep: string): Observable<any> {
    return this.http.get(`${this.apiUrl}${cep}/json`);
  }
}
