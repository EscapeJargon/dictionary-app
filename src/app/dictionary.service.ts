import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DictionaryService {
  constructor(private http: HttpClient) {}

  getDictionaryData(): Observable<any> {
    return this.http.get<any>('assets/dictionary.json');
  }
}
