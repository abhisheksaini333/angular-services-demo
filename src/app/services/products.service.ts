import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  listOfProducts = [
    { name: 'iPhone', price: '$999' },
    { name: 'iMac', price: '$1999' },
    { name: 'iWtach', price: '$399' }
  ];

  constructor() { }


  getProducts() {
    return this.listOfProducts;
  }
}
