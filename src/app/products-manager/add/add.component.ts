import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ProductService } from 'src/app/products/services/product.service';
import { RangeValidator } from 'src/app/shared/validators/range.validator';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles: [
  ]
})
export class AddComponent implements OnInit {

  productForm: FormGroup;
  imageUrls: FormArray = this.fb.array([]);
  Sellers: FormArray = this.fb.array([]);
  types: string[] = [];
  imageDisplay: string = "";
  constructor(private fb: FormBuilder, private ps: ProductService,
    private toast: MessageService) { }

  ngOnInit(): void {
    this.productForm = this.fb.group({
      // title: new FormControl("",[Validators.required,Validators.minLength(3)]),
      // title: ["",Validators.required],
      title: ["", [Validators.required, Validators.minLength(3)]],
      type: "",
      description: "",
      availibility: "",
      releaseDate: "",
      safeFor: "",
      qualityScore: "",
      tags: [],
      // price: [0, rangeValidator],
      price: [0, RangeValidator(0, 95)],
      rating: [0, Validators.min(1)],
      imageurls: this.imageUrls,
      sellers: this.Sellers
    });

    this.types = this.ps.getCategories();

    // this.productForm.get("imageurl").valueChanges.subscribe(v => this.imageDisplay = v);
    this.productForm.get("availibility").valueChanges.subscribe(v => {
      let releaseDate = this.productForm.get("releaseDate");
      if (v) {
        releaseDate.setValidators(Validators.required);
      } else {
        releaseDate.clearValidators();
      }
      releaseDate.updateValueAndValidity();
    });
  }

  AddImage() {
    let imageUrls = this.productForm.get("imageurls") as FormArray;
    let rating = this.productForm.get("rating");
    console.log(imageUrls);
    console.log(rating);
    if (imageUrls.controls.length < 3) {
      imageUrls.push(this.fb.control("", Validators.required));
    } else {
      this.toast.add({
        severity: "info",
        summary: "Limit Reached",
        detail: "Maximum 3 Images to be added",
        sticky: false
      })
    }
  }

  AddSeller() {
    let sellers = this.productForm.get("sellers") as FormArray;
    if (sellers.controls.length < 3) {
      sellers.push(this.fb.group({
        AddLine1: ["", Validators.required],
        AddLine2: "",
        AddLine3: "",
        City: "",
        State: ""
      }));
    } else {
      this.toast.add({
        severity: "info",
        summary: "Limit Reached",
        detail: "Maximum 3 Seller Address to be added",
        sticky: false
      })
    }
  }



  RemoveControl(index) {
    let imageUrls = this.productForm.get("imageurls") as FormArray;
    imageUrls.removeAt(index);
  }

  RemoveAddress(index) {
    let sellers = this.productForm.get("sellers") as FormArray;
    sellers.removeAt(index);
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

// function rangeValidator(c: AbstractControl): ValidationErrors | null {
//   if (c.value < 0 || c.value > 100) {
//     return { range: true };
//   }
//   return null;
// }
