import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  endpoint: string = "http://localhost:1337";
  productSub$: Subject<Product[]>;

  constructor(private http: HttpClient) { 
    this.productSub$ = new Subject<Product[]>();
    this.http.get(this.endpoint + '/products')
      .subscribe(this.productSub$);
    this.refreshProducts();
  }

  getProducts() : Subject<Product[]> {
    return this.productSub$;
  }

  refreshProducts() : void {
    this.productSub$.next();
  }
}
