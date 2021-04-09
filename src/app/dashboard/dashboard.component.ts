import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ComponentFactoryResolver, ComponentRef, ElementRef, EventEmitter, Input, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { BehaviorSubject, Observable, Observer, ReplaySubject, Subject, Subscription } from 'rxjs';
import { AdService } from '../Advertises/ad.service';
import { AdItem } from '../Advertises/ad-Item';
import { Ad1Component } from '../Advertises/ad1/ad1.component';
import { IframExComponent } from '../ifram-ex/ifram-ex.component';
// import { Observable, Subscription } from 'rxjs-compat';

export class DataListProvider {

  constructor(){
    setInterval(()=>{
      this.nums = this.newData();
    },3000);
  }
  private nums:number[]=[];
  public get data(): number[] {
    return this.nums;
  }

  private newData(){
    let numbs = [];
    for (let i = 0; i < 5; i++) {
      numbs.push(Math.floor(Math.random() * 101));
    }
    return numbs;
  }
  
}

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
    
  `],
  changeDetection:ChangeDetectionStrategy.OnPush,
  providers:[DataListProvider]
})
export class DashboardComponent implements OnInit, OnDestroy {
  /** Based on the screen size, switch from standard to one column per row */
  ads: AdItem[] = [];
  constructor(private adService: AdService,
    private viewContainerRef: ViewContainerRef, private resolver: ComponentFactoryResolver) {
    this.ads = this.adService.getAds();
    
  }

  ngOnInit(): void {

    // let sub1 = new Subject();
    // sub1.subscribe(data => {
    //   console.log(`Subject Data : ${data}`);
    // });
    // sub1.next("Data 1");
    // sub1.next("Data 2");

    // let sub2 = new BehaviorSubject(0);
    // sub2.subscribe(data=>{
    //   console.log(`Behavior Subject Data : ${data}`);
    // });
    // sub2.next(Math.random());
    // sub2.next(Math.random());

    // let sub3 = new ReplaySubject(2, 2000);

    // sub3.subscribe(data => console.log(`Replay Subject Data : Sub 1 : ${data}`));

    // sub3.next(Math.random());
    // sub3.next(Math.random());
    // sub3.next(Math.random());

    // sub3.subscribe(data => console.log(`Replay Subject Data : Sub 2 : ${data}`));
    // setTimeout(() => {
    //   sub3.subscribe(data => console.log(`Replay Subject Data : Sub 3 : ${data}`));
    // }, 3000);

    // sub3.next(Math.random());
  }

  ngOnDestroy(): void {

  }

  @ViewChild("iframe", { static: false }) iframe;
  doc: any;
  compRef: ComponentRef<IframExComponent>;
  live:boolean;
  onLoad(iframe) {
    // this.doc = iframe.contentDocument || iframe.contentWindow;
    // const compFactory = this.resolver.resolveComponentFactory(IframExComponent);
    // this.compRef = this.viewContainerRef.createComponent(compFactory);
    // this.compRef.location.nativeElement.id = "innerComp";
    // this.compRef.instance.data = "Sample data passed to the iFrame Component";
    // this.compRef.instance.emitData.subscribe(data => {
    //   console.log(data);
    // })
    // this.doc.body.appendChild(this.compRef.location.nativeElement);
  }

  counter = 0;
  updateCounter(){
    this.counter++;
  }
}


