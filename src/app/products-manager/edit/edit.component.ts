import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ImageUrl, Product, Tag, TypeMaster } from 'src/app/products/services/product.model';
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
      typeId: "",
      description: "",
      availibility: "",
      releaseDate: "",
      safeFor: "",
      qualityScore: "",
      tags: [],
      price: [0, RangeValidator(0, 1000)],
      rating: [0, Validators.min(1)],
      imageurls: this.imageUrls,
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
        id: "",
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
    var form = this.productForm.value as Product;
    var tags: Tag[] = [];
    form.tags.forEach(t => {
      var tg = this.product.Tags.find((tg: Tag) => tg.tag == t);
      if (tg) {
        tags.push(tg);
      } else {
        tags.push({ tag: t });
      }
    });

    var imgs: ImageUrl[] = [];
    form.imageurls.forEach(i => {
      var img = this.product.ImageUrls.find((im: ImageUrl) => im.imageUrl == i);
      if (img) {
        imgs.push(img);
      } else {
        imgs.push({ imageUrl: i });
      }
    });

    var prod: Product = {
      ...this.productForm.value,
      Tags: tags,
      ImageUrls: imgs
    }

    this.ps.updateProduct(prod).subscribe(resp => {
      this.ps.notify.emit(true);
      this.router.navigate(["/productsmanager"]);
    });
  }

  formatLabel(value: number) {
    if (value >= 100) {
      return 100;
    }

    return value;
  }

  populateForm() {
    this.product.ImageUrls.forEach(i => {
      (<FormArray>this.productForm.get("imageurls")).push(this.fb.control(""));
    });
    this.product.Addresses.forEach(element => {
      (<FormArray>this.productForm.get("Addresses")).push(this.fb.group({
        id: "",
        AddLine1: ["", Validators.required],
        AddLine2: "",
        AddLine3: "",
        City: "",
        State: ""
      }));
    });
    this.productForm.patchValue(this.product);
    this.productForm.get("tags").patchValue(this.product.Tags.map(m => m.tag));
    this.productForm.get("safeFor").patchValue(this.product.safeFor.toString());
    this.productForm.get("imageurls").patchValue(this.product.ImageUrls.map(m => m.imageUrl));
  }

}
