import { Component } from '@angular/core';
import { combineLatestWith, map } from 'rxjs';
import { ProductCategoryServies } from './categories.service';
import { IProduct } from './product';
import { ProductServies } from './product.service';
@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  constructor(
    private prodservies: ProductServies,
    private categoryservices: ProductCategoryServies
  ) {
    console.log('The Constructor has been initialized');
  }

  imagewidth: number = 50;
  imageleftmargin: number = 20;
  displayImg: boolean = false;
  private _listFilter: string = '';
  ratingChild: string = '';
  displayCode:boolean=false;

  public get listFilter(): string {
    return this._listFilter;
  }

  public set listFilter(v: string) {
    this._listFilter = v;
  }
  products$ = this.prodservies.prodct$Services;
  productWithCategires$ = this.categoryservices.productCategories$.pipe(
    combineLatestWith(this.products$),
    map(([cateis, prods]) =>
      prods.map(
        (prod) =>
          ({
            ...prod,
            catName: cateis.find((c) => prod.catId === c.catId)?.catName,
          } as IProduct)
      )
    )
  );
  reciveDataFromChild(v: string) {
    this.ratingChild = v;
  }
  toggleImage() {
    this.displayImg = !this.displayImg;
  }
  toggleCode(){
    this.displayCode=!this.displayCode;
  }
}
