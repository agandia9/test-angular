import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { IProductInfo } from '../data-types/product-info.interface';
import { add, remove } from '../store/fav.actions';

@Injectable({
  providedIn: 'root',
})
export class FavsService {
  constructor(private store: Store<{ favList: Array<IProductInfo> }>) {}

  public addFav(fav: any) {
    this.store.dispatch(add({ newProduct: fav }));
  }
  public removeFav(fav: any) {
    this.store.dispatch(remove({ id: fav.id }));
  }
}
