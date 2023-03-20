import { TestBed } from '@angular/core/testing';

import { ProductDetaileGuard } from './product-detaile.guard';

describe('ProductDetaileGuard', () => {
  let guard: ProductDetaileGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProductDetaileGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
