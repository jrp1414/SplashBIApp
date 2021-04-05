import { Component, ComponentFactoryResolver, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AdItem } from '../ad-Item';
import { AdDirective } from '../ad.directive';
import { AdService } from '../ad.service';
import { AdComponent } from '../adComponent';

@Component({
  selector: 'app-ad-holder',
  template: `
    <ng-template adHost></ng-template>
  `,
  styles: [
  ]
})
export class AdHolderComponent implements OnInit, OnDestroy {
  ads: AdItem[] = [];
  currentAdIndex: number = -1;
  @ViewChild(AdDirective, { static: true }) adHost: AdDirective;
  interval: any;
  constructor(private adService: AdService, private compFactoryResolver: ComponentFactoryResolver) { }
  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  ngOnInit(): void {
    this.ads = this.adService.getAds();
    this.loadComponent();
    this.changeAds();
  }

  loadComponent() {
    this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
    let adItem = this.ads[this.currentAdIndex];
    let compFactory = this.compFactoryResolver.resolveComponentFactory(adItem.component);
    this.adHost.viewContainerRef.clear();
    let compRef = this.adHost.viewContainerRef.createComponent<AdComponent>(compFactory);
    compRef.instance.data = adItem.data;
  }

  changeAds() {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 4000);
  }

}
