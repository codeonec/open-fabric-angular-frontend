import { CommonModule } from "@angular/common";
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from "@angular/forms";

@Component({
  selector: "product-form",
  imports: [CommonModule, ReactiveFormsModule],
  standalone: true,
  template: `
    <div class="container py-5">
      <form [formGroup]="productForm" (ngSubmit)="onSubmit()">
        <div class="form-group">
          <label for="name">Product Name</label>
          <input
            type="text"
            class="form-control"
            id="name"
            formControlName="name"
            placeholder="Enter product name"
          />
        </div>
        <div class="form-group">
          <label for="description">Product Description</label>
          <textarea
            class="form-control"
            id="description"
            formControlName="description"
            rows="3"
            placeholder="Enter product description"
          ></textarea>
        </div>
        <div class="form-group">
          <label for="image">Product Image URL</label>
          <input
            type="text"
            class="form-control"
            id="image"
            formControlName="image"
            placeholder="Enter product image URL"
          />
        </div>
        <div class="form-group">
          <label for="dateCreated">Date Created</label>
          <input
            type="date"
            class="form-control"
            id="dateCreated"
            formControlName="dateCreated"
          />
        </div>
        <button
          type="submit"
          class="btn btn-primary"
          [disabled]="!productForm.valid"
        >
          Submit
        </button>
      </form>
    </div>
  `,
})
export class ProductFormComponent implements OnInit {
  @Input() product: any;
  @Output() formSubmit: EventEmitter<any> = new EventEmitter();

  productForm!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.productForm = new FormGroup({
      name: new FormControl(
        this.product ? this.product.name : "",
        Validators.required
      ),
      description: new FormControl(
        this.product ? this.product.description : "",
        Validators.required
      ),
      image: new FormControl(
        this.product ? this.product.image : "",
        Validators.required
      ),
      dateCreated: new FormControl(
        this.product ? this.product.dateCreated : "",
        Validators.required
      ),
    });
  }

  onSubmit() {
    if (this.productForm.valid) {
      this.formSubmit.emit(this.productForm.value);
    }
    console.log(this.productForm.value);
  }
}
