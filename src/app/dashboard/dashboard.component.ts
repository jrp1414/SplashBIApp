import { Component, EventEmitter, Input, OnDestroy, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Observable, Observer, Subject, Subscription } from 'rxjs';
import { AdService } from '../Advertises/ad.service';
import { AdItem } from '../Advertises/ad-Item';
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
  ads:AdItem[]=[];
  constructor(private adService:AdService) { 
    this.ads = this.adService.getAds();
  }
  
  ngOnInit(): void {
    
  }

  ngOnDestroy(): void {
    
  }
}
