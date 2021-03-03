import { Component, ViewEncapsulation } from '@angular/core';

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
  // encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  constructor() {
    // console.log(Colors.Red);
    // console.log(Colors.Blue);
    // console.log(Colors.Green);
  }
}

// enum ViewEncapsulation {
//   Emulated=100, //100
//   None, //101
//   ShadowDom //102
// }
