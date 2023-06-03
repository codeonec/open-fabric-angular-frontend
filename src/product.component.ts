import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import type { Product } from "./models";
import { RouterLink } from "@angular/router";

@Component({
  selector: "product",
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <a routerLink="/product/{{ product._id }}" class="text-decoration-none"
      ><div
        class="card product-card border bg-ter h-100 w-100 rounded-3"
        style="width: 18rem;"
      >
        <img src="{{ product.imgUrl }}" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{{ product.name }}</h5>
          <p class="card-text text-secondary description-text">
            {{ product.description }}
          </p>
        </div>
        <p class="card-body d-flex justify-content-between flex-wrap mb-0">
            {{ product.price | currency : "USD" }}
            <small class="text-body-secondary">
              {{ product.createdAt | date : "MMM dd, yyyy" }}</small
            >
          </p>
      </div>
    </a>
  `,
})
export class ProductComponent {
  @Input() product!: Product;
}
