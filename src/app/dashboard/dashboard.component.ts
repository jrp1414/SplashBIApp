import { Component, ComponentFactoryResolver, ComponentRef, ElementRef, EventEmitter, Input, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Observable, Observer, Subject, Subscription } from 'rxjs';
import { AdService } from '../Advertises/ad.service';
import { AdItem } from '../Advertises/ad-Item';
import { Ad1Component } from '../Advertises/ad1/ad1.component';
import { IframExComponent } from '../ifram-ex/ifram-ex.component';
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
  ads: AdItem[] = [];
  constructor(private adService: AdService,
    private viewContainerRef: ViewContainerRef, private resolver: ComponentFactoryResolver) {
    this.ads = this.adService.getAds();
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {

  }

  @ViewChild("iframe", { static: false }) iframe;
  doc: any;
  compRef: ComponentRef<IframExComponent>;
  onLoad(iframe) {
    this.doc = iframe.contentDocument || iframe.contentWindow;
    const compFactory = this.resolver.resolveComponentFactory(IframExComponent);
    this.compRef = this.viewContainerRef.createComponent(compFactory);
    this.compRef.location.nativeElement.id = "innerComp";
    this.compRef.instance.data = "Sample data passed to the iFrame Component"; 
    this.compRef.instance.emitData.subscribe(data=>{
      console.log(data);
    })
    this.doc.body.appendChild(this.compRef.location.nativeElement);
  }
}
