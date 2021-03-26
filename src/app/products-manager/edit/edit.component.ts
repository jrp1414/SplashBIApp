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
  constructor(private fb: FormBuilder, private ps: ProductService,
    private toast: MessageService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.productForm = this.fb.group({
      id: "",
      title: ["", [Validators.required, Validators.minLength(3)]],
      typeId: "",
      description: "",
      availibility: "",
      releaseDate: "",
      safeFor: "",
      qualityScore: "",
      tags: [],
      price: [0],
      rating: [0, Validators.min(1)],
      imageurls: this.imageUrls,
      Addresses: this.Sellers
    });

    this.ps.getCategories().subscribe(p => {
      this.types = <TypeMaster[]>p;
    });

    this.route.params.subscribe(p => {
      this.ps.getProduct(p.id).subscribe(resp => {
        this.product = <Product>resp;
        this.populateForm();
      });
    })

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

  populateForm() {
    this.product.ImageUrls.forEach(i => {
      this.imageUrls.push(this.fb.group({
        id: "",
        imageUrl: ""
      }));
    });
    this.productForm.get("imageurls").patchValue(this.product.ImageUrls);

    this.product.Addresses.forEach(a => {
      this.Sellers.push(this.fb.group({
        id: "",
        AddLine1: ["", Validators.required],
        AddLine2: "",
        AddLine3: "",
        City: "",
        State: ""
      }));
    });
    this.productForm.patchValue(this.product);
    this.productForm.get("safeFor").patchValue(this.product.safeFor.toString());
    this.productForm.get("tags").patchValue(this.product.Tags.map(m => m.tag));

    // this.productForm.get("Addresses").patchValue(this.product.ImageUrls.map(m => m.imageUrl));
  }

  onSubmit() {
    var form = this.productForm.value as Product;
    var tags: Tag[] = [];
    form.tags.forEach(t => {
      var tag = this.product.Tags.find((tg: Tag) => tg.tag == t);
      if (tag) {
        tags.push(tag);
      } else {
        tags.push({ tag: t });
      }
    });

    this.ps.updateProduct({
      ...this.productForm.value,
      Tags: tags
    }).subscribe(resp => {
      this.ps.notify.emit(true);
      this.router.navigate(["/productsmanager"]);
    });
  }

  AddImage() {
    let imageUrls = this.productForm.get("imageurls") as FormArray;
    if (imageUrls.controls.length < 3) {
      imageUrls.push(this.fb.group({
        id: "",
        imageUrl: ""
      }));
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

  RemoveAddress(index) {
    let sellers = this.productForm.get("Addresses") as FormArray;
    sellers.removeAt(index);
  }



  formatLabel(value: number) {
    if (value >= 100) {
      return 100;
    }

    return value;
  }

}
