import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Product, TypeMaster } from 'src/app/products/services/product.model';
import { ProductService } from 'src/app/products/services/product.service';
import { RangeValidator } from 'src/app/shared/validators/range.validator';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styles: [
  ]
})
export class EditComponent implements OnInit {
  product: Product;
  productForm: FormGroup;
  imageUrls: FormArray = this.fb.array([]);
  Sellers: FormArray = this.fb.array([]);
  types: TypeMaster[] = [];
  imageDisplay: string = "";
  constructor(private route: ActivatedRoute,
    private ps: ProductService, private router: Router,
    private fb: FormBuilder, private toast: MessageService) { }

  ngOnInit(): void {
    this.productForm = this.fb.group({
      title: ["", [Validators.required, Validators.minLength(3)]],
      type: "",
      description: "",
      availibility: "",
      releaseDate: "",
      safeFor: "",
      qualityScore: "",
      Tags: [],
      price: [0, RangeValidator(0, 1000)],
      rating: [0, Validators.min(1)],
      ImageUrls: this.imageUrls,
      Addresses: this.Sellers
    });
    this.ps.getCategories().subscribe(p => {
      this.types = <TypeMaster[]>p;
    });
    this.route.params.subscribe((p) => {
      this.ps.getProduct(p.id).subscribe(p => {
        this.product = <Product>p;
        this.populateForm();
      });
    });

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
    let imageUrls = this.productForm.get("ImageUrls") as FormArray;
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
    let sellers = this.productForm.get("Addresses") as FormArray;
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
    let imageUrls = this.productForm.get("ImageUrls") as FormArray;
    imageUrls.removeAt(index);
  }

  RemoveAddress(index) {
    let sellers = this.productForm.get("Addresses") as FormArray;
    sellers.removeAt(index);
  }

  onSubmit() {
    this.ps.addProduct(this.productForm.value).subscribe(resp => {
      this.router.navigate(["/productsmanager"]);
    });
  }

  formatLabel(value: number) {
    if (value >= 100) {
      return 100;
    }

    return value;
  }

  populateForm(){
    this.product.ImageUrls.forEach(i => {
      (<FormArray>this.productForm.get("ImageUrls")).push(this.fb.control(""));
    });
    this.product.Addresses.forEach(element => {
      (<FormArray>this.productForm.get("Addresses")).push(this.fb.group({
        AddLine1: ["", Validators.required],
        AddLine2: "",
        AddLine3: "",
        City: "",
        State: ""
      }));
    });
    this.productForm.patchValue(this.product);
    this.productForm.get("Tags").patchValue(this.product.Tags.map(m => m.tag));
    this.productForm.get("safeFor").patchValue(this.product.safeFor.toString());
    this.productForm.get("ImageUrls").patchValue(this.product.ImageUrls.map(m => m.imageUrl));
  }

}
