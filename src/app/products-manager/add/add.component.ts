import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ProductService } from 'src/app/products/services/product.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles: [
  ]
})
export class AddComponent implements OnInit {

  productForm: FormGroup;
  imageUrls: FormArray = this.fb.array([]);
  types: string[] = [];
  imageDisplay: string = "";
  constructor(private fb: FormBuilder, private ps: ProductService,
    private toast: MessageService) { }

  ngOnInit(): void {
    this.productForm = this.fb.group({
      title: "",
      type: "",
      description: "",
      availibility: "",
      safeFor: "",
      qualityScore: "",
      tags: [],
      price: 0,
      rating: 0,
      imageurls: this.imageUrls,
      seller: this.fb.group({
        AddLine1: "",
        AddLine2: "",
        AddLine3: "",
        City: "",
        State: ""
      })
    });

    this.types = this.ps.getCategories();

    // this.productForm.get("imageurl").valueChanges.subscribe(v => this.imageDisplay = v);
  }

  AddImage() {
    let imageUrls = this.productForm.get("imageurls") as FormArray;
    if (imageUrls.controls.length < 3) {
      imageUrls.push(this.fb.control(""));
    } else {
      this.toast.add({
        severity: "info",
        summary: "Limit Reached",
        detail: "Maximum 3 Images to be added",
        sticky: false
      })
    }
  }

  RemoveControl(index) {
    let imageUrls = this.productForm.get("imageurls") as FormArray;
    imageUrls.removeAt(index);
  }

  onSubmit() {
    console.log(this.productForm.value);
  }

  formatLabel(value: number) {
    if (value >= 100) {
      return 100;
    }

    return value;
  }

}
