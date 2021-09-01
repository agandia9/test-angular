import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { add, remove } from '../../store/fav.actions';
import { IProductInfo } from '../../../app/data-types/product-info.interface';
import { ProductsService } from '../../../app/services/products.service';
import { FavsService } from '../../../app/services/favs-service.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.sass'],
})
export class LandingComponent implements OnInit {
  products: Array<IProductInfo> = [];
  showedProducts: Array<IProductInfo> = [];
  copyFilteredItems$: Array<IProductInfo> = [];
  index: number = 0;
  favList$: Observable<any>;
  searchText: string = '';
  searchCriteria: string = '';
  constructor(
    private productsService: ProductsService,
    private favsService: FavsService
  ) {
    this.productsService.search.subscribe((searchStr) => {
      this.searchText = searchStr;
      this.filteredItems();
    });
    this.productsService.criteria.subscribe((searchCrit) => {
      this.searchCriteria = searchCrit;
      this.filteredItems();
    });
  }

  ngOnInit(): void {
    this.getProductsList();
  }
  assignCopy() {
    this.copyFilteredItems$ = Object.assign(this.showedProducts);
  }
  public filteredItems() {
    if (this.searchCriteria.length && this.searchText.length) {
      this.copyFilteredItems$ = this.products.filter((product) =>
        product[this.searchCriteria.toLowerCase()].includes(this.searchText)
      );
    } else {
      this.assignCopy();
    }
  }
  public getProductsList() {
    this.productsService.getProductsList().subscribe((data: any) => {
      const { items } = data;

      this.products = items.map((item, i) => {
        item.id = i + 1;
        return item;
      });
      this.showedProducts.push(
        ...this.products.slice(this.index, this.index + 5)
      );
      this.index += 5;
    });
    this.assignCopy();
  }

  public onScroll() {
    if (this.index < this.products.length) {
      this.showedProducts.push(
        ...this.products.slice(this.index, this.index + 5)
      );
      this.index += 5;
    }
  }

  public addFav(fav) {
    this.favsService.addFav(fav);
  }

  public removeFav(fav) {
    this.favsService.removeFav(fav);
  }
}
