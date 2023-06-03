import { CommonModule } from "@angular/common";
import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  inject,
} from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from "@angular/forms";
import { APIServices } from "./api.service";

@Component({
  selector: "product-form",
  imports: [CommonModule, ReactiveFormsModule],
  standalone: true,
  template: `
    <div class="container py-5">
      <div class="row justify-content-center">
        <div class="col-lg-6 col-md-8">
          <div class="card">
            <div class="card-header text-center">
              <h3>Post your product</h3>
            </div>
            <div class="card-body">
              <form [formGroup]="productForm" (ngSubmit)="onSubmit()">
                <div class="form-group mb-3">
                  <label for="name">Product Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    formControlName="name"
                    placeholder="Enter product name"
                  />
                </div>
                <div class="form-group mb-3">
                  <label for="description">Product Description</label>
                  <textarea
                    class="form-control"
                    id="description"
                    formControlName="description"
                    rows="3"
                    placeholder="Enter product description"
                  ></textarea>
                </div>
                <div class="form-group mb-3">
                  <label for="image">Product Image URL</label>
                  <input
                    type="text"
                    class="form-control"
                    id="image"
                    formControlName="imgUrl"
                    placeholder="Enter product image URL"
                  />
                </div>
                <div class="form-group mb-3">
                  <label for="price">Price</label>
                  <input
                    type="number"
                    class="form-control"
                    id="price"
                    formControlName="price"
                    placeholder="Enter product price"
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
          </div>
        </div>
      </div>
    </div>
  `,
})
export class ProductFormComponent implements OnInit {
  @Input() product: any;
  @Output() formSubmit: EventEmitter<any> = new EventEmitter();

  productForm!: FormGroup;
  apiService = inject(APIServices);

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
      price: new FormControl(
        this.product ? this.product.price : "",
        Validators.required
      ),
      imgUrl: new FormControl(
        this.product ? this.product.imgUrl : "",
        Validators.pattern(
          "(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?"
        )
      ),
    });
  }

  onSubmit() {
    if (this.productForm.valid) {
      console.log(this.productForm.value);
      this.apiService.apiPost({
        name: this.productForm.value.name as String,
        description: this.productForm.value.description as String,
        price: this.productForm.value.price as Number,
        imgUrl: this.productForm.value.imgUrl as String,
      });
    }
  }
}
