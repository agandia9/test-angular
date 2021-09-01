import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../app/services/products.service';

@Component({
  selector: 'app-test-search-bar',
  templateUrl: './test-search-bar.component.html',
  styleUrls: ['./test-search-bar.component.sass'],
})
export class TestSearchBarComponent implements OnInit {
  constructor(private productsService: ProductsService) {}
  public searchCriteria = ['Title', 'Description', 'Price', 'Email'];
  ngOnInit(): void {}

  public onChangeSearchText(e) {
    const { value } = e.target;
    this.productsService.onSearchEvent(value);
  }

  public onChangeSearchCriteria(e) {
    const { value } = e.target;
    this.productsService.onChangeCriteriaEvent(value);
  }
}
