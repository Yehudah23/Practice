import { Service } from '@angular/core';

@Service()
export class Product {
  constructor(){
  console.log("service called");

  }

  getProductData(){
    return[
      {name:'Iphone',category:'mobile',price:120000},
      {name:'Samsung',category:'mobile',price:150000},
      {name:'Google Pixel',category:'mobile',price:100000},
      {name:'Huwei',category:'mobile',price:110000},
      {name:'Xiaomi',category:'mobile',price:115000},
    ]
  }

}
