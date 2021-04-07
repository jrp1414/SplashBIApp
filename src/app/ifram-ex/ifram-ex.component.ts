import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ifram-ex',
  templateUrl: './ifram-ex.component.html',
  styles: [
  ]
})
export class IframExComponent implements OnInit {

  @Input() data: any = "";
  @Output() emitData: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  sendData() {
    this.emitData.emit("Data Emitted from child");
  }

}
