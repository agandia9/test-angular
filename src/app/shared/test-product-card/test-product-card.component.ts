import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { IProductInfo } from 'src/app/data-types/product-info.interface';

@Component({
  selector: 'app-test-product-card',
  templateUrl: './test-product-card.component.html',
  styleUrls: ['./test-product-card.component.sass'],
})
export class TestProductCardComponent implements OnInit {
  @Input('product') product: IProductInfo;
  @Output('addFav') addFav = new EventEmitter();
  @Output('removeFav') removeFav = new EventEmitter();
  favList$;
  constructor(private store: Store<{ favList: number }>) {
    store.select('favList').subscribe((s) => {
      this.favList$ = s;
    });
  }

  ngOnInit(): void {}

  public clickOnFav() {
    this.addFav.emit(this.product);
  }
  public removeFromFav() {
    this.removeFav.emit(this.product);
  }
  get isInFav() {
    return this.favList$.find(
      (product: IProductInfo) => product.id === this.product.id
    )
      ? true
      : false;
  }
}
