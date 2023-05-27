import { Component, Input, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
@Component({
  selector: "product-detail",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container py-5">
      <div class="card mb-3 border-0">
        <div class="row g-0">
          <div class="col-md-4">
            <img
              [src]="product.image"
              class="card-img-top"
              alt="{{ product.name }}"
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{{ product.name }}</h5>
              <p class="card-text">
                {{ product.description }}
              </p>
              <p class="card-text">
                <small class="text-body-secondary"
                  >Date Created: {{ product.dateCreated }}</small
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class ProductDetailComponent implements OnInit {
  product: any;
  productId: any;
  constructor() {}
  @Input()
  set id(productId: string) {
    this.productId = productId;
    console.log(this.productId);
    this.getProductDetails(this.productId);
  }
  ngOnInit(): void {}
  getProductDetails(id: number) {
    // Fetch product data using the provided ID
    // Replace this with your actual API call or data fetching method
    this.product = {
      id: id,
      name: "Sample Product",
      description: "This is a sample product description.",
      image:
        "https://images.unsplash.com/photo-1646736722277-8e035a16e056?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=450&q=80",
      dateCreated: "2023-05-27",
    };
  }
}
