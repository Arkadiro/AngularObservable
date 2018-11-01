import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Observer, Subscription, interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  numbersSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    const myNumbers = interval(1000)
      .pipe(map((data:number) => data*2));

    this.numbersSubscription =  myNumbers
      .subscribe(
        (number: number) => {console.log(number)}
      )

    const myObservable = Observable.create((observer: Observer<number>)=>{
      setTimeout(()=>{
        observer.next(1)
      },2000);
      setTimeout(()=>{
        observer.next(2)
      },4000);
      setTimeout(()=>{
        //observer.error('error')
        observer.complete()
      },6000);
    })

    // myObservable.subscribe(
    //   (number: number) => {console.log(number)},
    //   (error: string) => {console.log(error)},
    //   () => {console.log('completed')}
    // )
  }
  ngOnDestroy(){
    this.numbersSubscription.unsubscribe();
    //console.log('Destroyed')
  }

}
