import { Component, OnInit } from '@angular/core';
import { IProductInfo } from '../../../app/data-types/product-info.interface';
import { ProductsService } from '../../../app/services/products.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.sass'],
})
export class LandingComponent implements OnInit {
  products: Array<IProductInfo>;
  showedProducts: Array<IProductInfo> = [];
  constructor(private productsService: ProductsService) {}
  index = 5;
  ngOnInit(): void {
    this.getProductsList();
  }

  private getProductsList() {
    this.productsService.getProductsList().subscribe((data: any) => {
      const { items } = data;
      this.products = items;
      this.showedProducts.push(
        ...this.products.slice(this.index, this.index + 5)
      );
      console.log(this.showedProducts);
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
}
