import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Observable, of, from } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'practice';

  data:any[] = [];

  array1 = [1,3,5,7,9];
  array2 = ['A','B','C','D'];

  // 1.create observable

  // Observable
  myObservable = new Observable ( (observer) => {
    // observer.next([1,2,3,4,5]);
    setTimeout(() => { observer.next(1); }, 1000);
    setTimeout(() => { observer.next(2); }, 2000);
    setTimeout(() => { observer.next(3); }, 3000);
    setTimeout(() => { observer.next(4); }, 4000);
    setTimeout(() => { observer.next(5); }, 5000);
    // setTimeout(() => { observer.error(new Error('Something went wrong. Please try again later!'))});
    setTimeout(() => { observer.next(6); }, 6000);
    // setTimeout(() => { observer.next(7); }, 7000);
    setTimeout(() => { observer.complete() }, 7000);
  });

  // of operator
  myObservable1 = of(this.array1, this.array2);

  // from operator
  myObservable2 = from(this.array1);

  GetAsyncData() {

    // Observer
    // this.myObservable.subscribe((val: any) => {
    //   this.data = val;
    //   this.data.push(val)
    // },
    // (err) => {
    //   alert(err.message);
    // },
    // () => {
    //   alert('All the data is streamed');
    // });

    this.myObservable.subscribe({
      next : (val:any) => {
        this.data.push(val);
      },
      error(err){
        alert(err.message);
      },
      complete(){
        alert('All the data is streamed');
      }
    }),

    this.myObservable1.subscribe({
      next : (val:any) => {
        this.data.push(val);
      },
      error(err){
        alert(err.message);
      },
      complete(){
        alert('All the data is streamed');
      }
    })

    this.myObservable2.subscribe({
      next : (val:any) => {
        this.data.push(val);
      },
      error(err){
        alert(err.message);
      },
      complete(){
        alert('All the data is streamed');
      }
    })
  }
}
