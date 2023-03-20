import { HttpClient    } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { ICategory } from './Category';

@Injectable({ providedIn: 'root' })
export class ProductCategoryServies {
  constructor(private http: HttpClient) {}
  private categoryURL = 'fakeapi/category.json';
  productCategories$ = this.http
    .get<ICategory[]>(this.categoryURL)
    .pipe(tap((data) => console.log(JSON.stringify(data))));
}
