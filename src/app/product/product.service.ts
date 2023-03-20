import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, tap, throwError } from 'rxjs';
import { IProduct } from './product';

@Injectable({ providedIn: 'root' })
export class ProductServies {
  constructor(private http: HttpClient) {}
  private productURL = 'fakeapi/product.json';

  prodct$Services = this.http.get<IProduct[]>(this.productURL).pipe(
    map((products) =>
      products.map(
        (product) =>
          ({
            ...product,
            price: product.price * 2,
          } as IProduct)
      )
    ),
    tap((data) => console.log(JSON.stringify(data))),
    catchError(this.handelError)
  );

  handelError(handelError: HttpErrorResponse) {
    let msg = '';
    if (handelError.error instanceof ErrorEvent) {
      msg = `Error From Client:${handelError.error.message}`;
    } else msg = `Error From Server Status:${handelError.status}`;
    return throwError(() => msg);
  }
}
