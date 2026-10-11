import { Component } from '@angular/core';
import { Product } from '../services/product';

@Component({
  imports: [],
  selector: 'app-products',
  styleUrl: './products.css',
  templateUrl: './products.html',
})
export class Products {
  productData:
    | {
        name: string;
        category: string;
        price: number;
      }[]
    | undefined;

  constructor(public productService: Product) {}
  ngOnInit() {
    this.productData=this.productService.getProductData();
  }
}
