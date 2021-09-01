import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClientService } from './http-client.service';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private httpClientService: HttpClientService) {}
  search: EventEmitter<string> = new EventEmitter();
  criteria: EventEmitter<string> = new EventEmitter();

  onSearchEvent(e) {
    this.search.next(e);
  }

  onChangeCriteriaEvent(e) {
    this.criteria.next(e);
  }

  getProductsList(): Observable<Object> {
    return this.httpClientService.get(
      'https://frontend-tech-test-data.s3.eu-west-1.amazonaws.com/items.json'
    );
  }
}
