import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styles: [
  ]
})
export class CartComponent implements OnInit {
  @Input() products:string[]=[];
  constructor() { }

  ngOnInit(): void {
  }

}
