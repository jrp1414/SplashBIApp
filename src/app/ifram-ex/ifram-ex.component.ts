import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { DataListProvider } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-ifram-ex',
  templateUrl: './ifram-ex.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  inputs:['live']
})
export class IframExComponent implements OnInit {

  // @Input() data: any = "";
  // @Output() emitData: EventEmitter<any> = new EventEmitter();
  constructor(private changeRef: ChangeDetectorRef, public dataProvider: DataListProvider) {

  }

  ngOnInit(): void {
    // this.changeRef.detach();
    // setInterval(() => {
    //   // this.counter++;
    //   // this.changeRef.markForCheck();
    //   this.changeRef.detectChanges();
    // }, 5000);

  }
  data: number[] = [];
  @Input() set live(value:boolean){
    if (value) {
      this.changeRef.reattach();      
    } else {
      this.changeRef.detach();
    }    
  };
  

  sendData() {
    // this.emitData.emit("Data Emitted from child");
  }

  message: string = "";
  counter: number = 0;
  executeFunction() {
    this.counter++;
    this.message = `Child Counter : ${this.counter}`;
    return this.message;
  }

}


