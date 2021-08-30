import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IProductInfo } from '../../data-types/product-info.interface';
import { FavsService } from '../../services/favs-service.service';

@Component({
  selector: 'app-test-product-fav-list',
  templateUrl: './test-product-fav-list.component.html',
  styleUrls: ['./test-product-fav-list.component.sass'],
})
export class TestProductFavListComponent implements OnInit {
  @Input('product') product: IProductInfo;
  @Input('isLastProduct') isLastProduct: boolean;
  private favList$;
  constructor(
    private store: Store<{ favList: number }>,
    private favsService: FavsService
  ) {
    store.select('favList').subscribe((s) => {
      this.favList$ = s;
    });
  }

  ngOnInit(): void {}

  public removeProductFromFav() {
    console.log(this.product);
  }
  get isInFav() {
    return this.favList$.find(
      (product: IProductInfo) => product.id === this.product.id
    )
      ? true
      : false;
  }

  public removeFromFav() {
    this.favsService.removeFav(this.product);
  }
}
