import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterApiService {
  private api = '/api/counter';

  constructor(private http: HttpClient) { }

  getCounter(): Observable<{ counter: number }> {
    return this.http.get<{ counter: number }>(this.api);
  }
}
