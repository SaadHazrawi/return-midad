import { Component, OnInit } from '@angular/core';
import {
  combineLatestWith,
  filter,
  from,
  interval,
  Observable,
  of,
  range,
  timer,
} from 'rxjs';

@Component({
  selector: 'midad-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    // let observ = {
    //   next: (apple: any) => console.log(`Catch The apple ${apple}`),
    //   error: (err: any) => console.log(`Catch The Error ${err}`),
    //   complete: () => console.log('Done the Catch Apple'),
    // };
    // let appleObervable$ = new Observable((appleObserv) =>{
    //  appleObserv.next("First Apple");
    //  appleObserv.next("Second Apple");
    //  appleObserv.next("Third Apple");
    //  appleObserv.complete();
    // }).subscribe(observ);

    // let number$=of(1,2,3,4,5,6,7).subscribe(
    //   n=>console.log(n)
    // );

    // let numArray$=from([1,2,3,4,5,6,7]).subscribe(nA=>console.log(nA))

    //  let number$=of(...[1,2,3,4,5,6,7]).subscribe(
    //   n=>console.log(n)
    // );

    // interval(1000).subscribe(n=>console.log(n));

    // let numbers = range(1, 11).pipe(
    //   filter(x=>x%2==0)
    // ).subscribe((x) => console.log(x));

    // let t1$ = timer(4000,5000);
    // let t2$ = timer(2000, 1000);

    // t1$
    // .pipe(combineLatestWith(t2$))
    // .subscribe((x) => console.log(x));

    
  }
  title: string = 'Return Angular Midad ';
}
