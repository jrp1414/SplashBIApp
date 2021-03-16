import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { ProductService } from './products/services/product.service';
import { LoggerService } from './shared/services/logger.service';

@Component({
  // selector: 'app-main',
  // selector: '[app-main]',
  selector: '.app-main',
  // template:"<h1>Inline HTML Template Example</h1>"
  // template: `
  // <h1>Multiline Template Example</h1>
  // <h2>Multiline Template Example Line 2</h2>
  // `
  templateUrl: "./app.component.html",
  // styles: [
  //   `
  //   h1{background-color:aqua;}
  //   `,
  //   `
  //   h1{color:blue;}
  //   `
  // ]
  styleUrls: [
    "./app.component.css"
  ],
  // providers:[LoggerService, ProductService]
  // encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

  constructor(private primengConfig: PrimeNGConfig) {
    // console.log(Colors.Red);
    // console.log(Colors.Blue);
    // console.log(Colors.Green);
  }
  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }
}

// enum ViewEncapsulation {
//   Emulated=100, //100
//   None, //101
//   ShadowDom //102
// }
