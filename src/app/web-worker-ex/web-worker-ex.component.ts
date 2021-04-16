import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-web-worker-ex',
  templateUrl: './web-worker-ex.component.html',
  styles: [
  ]
})
export class WebWorkerExComponent implements OnInit {

  constructor() { }
  test() {
    alert("Clicked");
  }
  number: number;
  output: number;
  calcFib() {
    this.output = fibonacci(this.number);
  }

  numberWorker: number;
  outputWorker: number;
  webworker: Worker;
  calcFibWorker() {
    this.webworker.postMessage(this.numberWorker);
  }

  ngOnInit(): void {
    if (typeof Worker !== 'undefined') {
      this.webworker = new Worker("./fibonacci.worker", { type: `module` });
      this.webworker.onmessage = (data) => {
        this.outputWorker = data.data;
      }
    }
  }

}

export function fibonacci(num: number) {
  if (num == 1 || num == 2) {
    return 1;
  }
  return fibonacci(num - 1) + fibonacci(num - 2);
}
 