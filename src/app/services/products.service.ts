import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClientService } from './http-client.service';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private httpClientService: HttpClientService) {}

  getProductsList(): Observable<Object> {
    return this.httpClientService.get(
      'https://frontend-tech-test-data.s3.eu-west-1.amazonaws.com/items.json'
    );
    // this.dataService.sendGetRequest().subscribe((data: any[])=>{
    //   console.log(data);
    //   this.products = data;
    // })
  }
}
