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
  index = 0;
  favList$: Observable<any>;

  constructor(
    private productsService: ProductsService,
    private favsService: FavsService
  ) {}

  ngOnInit(): void {
    this.getProductsList();
  }

  private getProductsList() {
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
