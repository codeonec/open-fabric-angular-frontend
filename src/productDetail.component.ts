import { Component, Input, OnInit, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { APIServices } from "./api.service";
import { Observable } from "rxjs";
@Component({
  selector: "product-detail",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="product$ | async as product" class="container py-5">
      <div class="card mb-3 border-0">
        <div class="row g-0">
          <div class="col-md-4" *ngIf="product.imgUrl">
            <img
              [src]="product.imgUrl"
              class="card-img-top"
              [alt]="product.name"
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title fw-bold">{{ product.name }}</h5>
              <p class="card-text mb-3">
                {{ product.description }}
              </p>
              <p class="fs-6 fw-bold mb-0">
                {{ product.price | currency : "USD" }}
              </p>
              <p class="card-text">
                <small class="text-body-secondary">
                  {{ product.createdAt | date : "MMM dd, yyyy" }}</small
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
  product$!: Observable<any>;
  productId: any;
  constructor() {}

  apiService = inject(APIServices);

  @Input()
  set id(productId: string) {
    this.productId = productId;
  }
  ngOnInit(): void {
    this.product$ = this.apiService.apiGetProduct(this.productId);
  }
}
