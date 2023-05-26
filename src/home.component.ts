import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container pt-5">
      <div class="row">
        <div class="col-12">
          <h2>All Products</h2>
        </div>
      </div>
    </div>
  `,
})
export class HomeComponent {}
