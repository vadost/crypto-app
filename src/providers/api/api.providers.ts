import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';

@Injectable()
export class ApiService {

  private apiUrl: string;
  private options = {
    headers: new HttpHeaders({'Content-Type': 'application/json'}),
    withCredentials: true
  };

  constructor(private httpClient: HttpClient) {
    this.apiUrl = environment.apiUrl;
  }

  get(url: string, params?: HttpParams): Observable<any> {
    return this.httpClient.get(this.apiUrl + url, {...this.options, params});
  }

  post(url: string, body?: any): Observable<any> {
    return this.httpClient.post(this.apiUrl + url, body, this.options);
  }

  postExternal(url: string, body?: any): Observable<any> {
    return this.httpClient.post('/' + url, body, this.options);
  }

  put(url: string, body: string): Observable<any> {
    return this.httpClient.put(this.apiUrl + url, body, this.options);
  }

  delete(url: string) {
    return this.httpClient.delete(this.apiUrl + url);
  }
}
