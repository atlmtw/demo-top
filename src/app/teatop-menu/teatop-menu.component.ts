import { Component, OnInit } from '@angular/core';
import { ProductService } from '../providers/product.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Product } from '../models/Product';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
} from '@angular/animations';

@Component({
  selector: 'app-teatop-menu',
  templateUrl: './teatop-menu.component.html',
  styleUrls: ['./teatop-menu.component.scss'],
  animations: [
    trigger('selectChangeTrigger', [
      state('normal', style({})),
      state('changed', style({})),
      // transition('normal <=> changed', [
      //   animate('.3s', keyframes([
      //     style({ 
      //       transform: 'scale(1)', 
      //       offset: 0}),
      //     style({ 
      //       transform: 'scale(1.01)', 
      //       boxShadow: '0 1rem 1.5rem rgba(0,0,0,.2)',
      //       offset: 0.5}),
      //     style({ 
      //       transform: 'scale(1)', 
      //       offset: 1.0
      //     }),
      //   ])),
      // ]),
    ]),
  ]
})
export class TeatopMenuComponent implements OnInit {
  private onDestroy: Subject<void>;
  public products: Product[];
  public selectedProduct: Product;
  public uploadsDir: string;
  public selectedStyle: Object;
  public defaultStyle: Object;
  public triggerBool: boolean ;
  private selectedIndex: number;

  constructor(public productService: ProductService) { 
    this.onDestroy = new Subject<void>();
    this.uploadsDir = 'src/assets'
    this.selectedStyle = {
      'border':'4px solid rgb(252, 137, 44)',
      'background-color':'#fff'
    };
    this.triggerBool = false;
  }

  ngOnInit() : void {
    this.productService.getProducts()
      .pipe(takeUntil(this.onDestroy))
      .subscribe((_products: Product[]) => {
        this.products = _products;
        this.products[0].selected = true;
        this.selectedProduct = this.products[0];
        this.selectedIndex = 0;
      });
  }

  selectProduct(idx: number) : void {
    this.products[this.selectedIndex].selected = false;
    this.selectedIndex = idx;
    this.products[idx].selected = true;
    this.selectedProduct = this.products[this.selectedIndex];
    this.triggerBool = !this.triggerBool;
  }

}
