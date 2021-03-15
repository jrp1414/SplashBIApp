import { Component, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Observable, Observer, Subject, Subscription } from 'rxjs';
// import { Observable, Subscription } from 'rxjs-compat';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [`
    .grid-container {
      margin: 20px;
    }
    
    .dashboard-card {
      position: absolute;
      top: 15px;
      left: 15px;
      right: 15px;
      bottom: 15px;
    }
    
    .more-button {
      position: absolute;
      top: 5px;
      right: 10px;
    }
    
    .dashboard-card-content {
      text-align: center;
    }
    
  `]
})
export class DashboardComponent implements OnInit, OnDestroy {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Card 1', cols: 2, rows: 1 },
        { title: 'Card 2', cols: 1, rows: 1 },
        { title: 'Card 3', cols: 1, rows: 2 },
        { title: 'Card 4', cols: 1, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) { }
  // numSubs:Subscription;
  obSubs: Subscription;
  ngOnInit(): void {
    // let numObs = Observable.interval(1000);

    // this.numSubs = numObs.subscribe((num) => {
    //   console.log(num);
    // });

    // let obs = new Observable((o: Observer<string>) => {
    //   setTimeout(() => {
    //     o.next("First data");
    //   }, 1000);

    //   setTimeout(() => {
    //     o.next("Second data");
    //   }, 3000);

    //   setTimeout(() => {
    //     o.next("Third data");
    //   }, 5000);

    //   // setTimeout(() => {
    //   //   o.error("Error Occurred");
    //   // }, 6000);

    //   setTimeout(() => {
    //     o.complete();
    //   }, 6000);

    //   setTimeout(() => {
    //     o.next("Forth Data");
    //   }, 7000);
    // });


    // this.obSubs = obs.subscribe(
    //   (data) => { console.log(data); },
    //   (error) => { console.log("Some error occurred in the Observable"); },
    //   () => { console.log("Completed"); }
    // );

    // let subjectObs = new Subject();
    // setTimeout(() => {
    //   subjectObs.next("First data");
    // }, 1000);

    // setTimeout(() => {
    //   subjectObs.next("Second data");
    // }, 3000);

    // setTimeout(() => {
    //   subjectObs.next("Third data");
    // }, 5000);

    // setTimeout(() => {
    //   subjectObs.error("Error Occurred");
    // }, 6000);

    // setTimeout(() => {
    //   subjectObs.next("Forth Data");
    // }, 7000);


    // subjectObs.subscribe((data) => {
    //   console.log(data);
    // }, (error) => {
    //   console.log(error);
    // });


    let eventEm: EventEmitter<string> = new EventEmitter();
    setTimeout(() => {
      eventEm.emit("First data from Event Emitter");
    }, 1000);
    setTimeout(() => {
      eventEm.emit("Second data from Event Emitter");
    }, 3000);
    setTimeout(() => {
      eventEm.emit("Third data from Event Emitter");
    }, 5000);
    setTimeout(() => {
      eventEm.error("Error Occurred");
    }, 6000);
    setTimeout(() => {
      eventEm.emit("First data from Event Emitter");
    }, 7000);

    eventEm.subscribe((data) => { console.log(data) }, (e) => { console.warn(e) });
  }

  ngOnDestroy(): void {
    // this.numSubs.unsubscribe();
    // this.obSubs.unsubscribe();
  }
}
