import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import type { Product } from "./models";
import { RouterLink } from "@angular/router";

@Component({
  selector: "product",
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <a routerLink="/product/{{ product.id }}" class="text-decoration-none"
      ><div
        class="card product-card border bg-ter h-100 w-100"
        style="width: 18rem;"
      >
        <img src="{{ product.img }}" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{{ product.name }}</h5>
          <p class="card-text text-secondary">
            {{ product.description }}
          </p>
          <p class="card-text">
            <small class="text-body-secondary"
              >Date Created: {{ product.dateCreated }}</small
            >
          </p>
        </div>
      </div>
    </a>
  `,
})
export class ProductComponent {
  @Input() product!: Product;
}
