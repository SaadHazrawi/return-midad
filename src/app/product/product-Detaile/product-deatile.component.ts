import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, tap } from 'rxjs';
import { IProduct } from '../product';
import { ProductServies } from '../product.service';

@Component({
  selector: 'midad-product-deatile',
  templateUrl: './product-deatile.component.html',
  styleUrls: ['./product-deatile.component.css'],
})
export class ProductDetailComponent implements OnInit {
  idProduct: number | string | null;
  product!: IProduct;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductServies,
    private router: Router
  ) {
    this.idProduct = this.route.snapshot.paramMap.get('id');
    this.idProduct = Number(this.idProduct);
  }

  title: string = 'Hello Friend: ';
  goBackClick() {
    this.router.navigate(['/products']);
  }
  ngOnInit(): void {
    this.productService.prodct$Services
      .pipe(
        map(
          (products) =>
            products.find((i) => i.id === this.idProduct) as IProduct
        ),
        tap((data) => console.log(data))
      )
      .subscribe((product$) => (this.product = product$));
    //   .pipe(map((products) => products.map((prd) => ({
    //   ...prd,
    //   id:prd.id.find
    //   } as IProduct))))
    // console.log("XXXXXXXXXXXX");
    // console.log(this.product);
  }
}
