import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CollectorsService {
  apiUrl = 'http://127.0.0.1:8000/collectors/';
  constructor(private http: HttpClient) {}

  getCollectors(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
