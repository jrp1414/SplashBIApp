import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles: [
  ]
})
export class AddComponent implements OnInit {

  productForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.productForm = new FormGroup({
      title: new FormControl(),
      type: new FormControl()
    });
  }

  onSubmit() {
    console.log(this.productForm.value);
  }

}
