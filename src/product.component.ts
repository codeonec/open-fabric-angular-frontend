import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Product } from "./models";
@Component({
  selector: "product",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card product-card border bg-ter h-100 w-100" style="width: 18rem;">
      <img src="{{ product.img }}" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{{ product.name }}</h5>
        <p class="card-text text-secondary">
          {{ product.description }}
        </p>
      </div>
    </div>
  `,
})
export class ProductComponent {
  @Input() product!: Product;
}
