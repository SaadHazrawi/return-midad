import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDetaileGuard implements CanActivate {
  constructor(private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean |
     UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     let id=Number(route.paramMap.get('id'));
     if(id>12 || isNaN(id))
     {
      alert("I Catch You Please Checked your Id");
      this.router.navigate(['/products']);
      return false;
     }
    return true;
  }
  
}
