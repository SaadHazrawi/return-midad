import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './product-Detaile/product-deatile.component';
import { ConvertToSpacePipe } from '../Shared/convert-to-space.pipe';
import { ProductListComponent } from './product-list.component';
import { RouterModule } from '@angular/router';
import { ProductDetaileGuard } from './product-Detaile/product-detaile.guard';
import { SharedModule } from '../Shared/shared.module';

@NgModule({
  declarations: [
    ProductListComponent,
    ConvertToSpacePipe,
    ProductDetailComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      {
        path: 'products/:id',
        component: ProductDetailComponent,
        canActivate: [ProductDetaileGuard],
      },
    ]),
  ],
})
export class ProductModule {}
