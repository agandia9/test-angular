import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpClientService {
  // private REST_API_SERVER = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) {}

  public get(url: string) {
    return this.httpClient.get(url);
  }
}
