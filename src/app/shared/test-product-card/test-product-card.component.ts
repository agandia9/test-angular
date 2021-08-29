import { Component, Input, OnInit } from '@angular/core';
import { IProductInfo } from 'src/app/data-types/product-info.interface';

@Component({
  selector: 'app-test-product-card',
  templateUrl: './test-product-card.component.html',
  styleUrls: ['./test-product-card.component.sass'],
})
export class TestProductCardComponent implements OnInit {
  @Input('product') product: IProductInfo;
  constructor() {}

  ngOnInit(): void {}
}
