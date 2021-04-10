/// <reference lib="webworker" />

import { fibonacci } from "./web-worker-ex.component";

addEventListener('message', (evt) => {
  console.log(evt);
  let num = evt.data;  
  postMessage(fibonacci(num));
});
