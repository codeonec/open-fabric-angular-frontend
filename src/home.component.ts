import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Product } from "./models";
import { ProductComponent } from "./product.component";
@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule, ProductComponent],
  template: `
    <div class="container pt-5">
      <div class="row gy-4">
        <div class="col-12 pb-4">
          <div class="d-flex justify-content-between">
            <h2>All Products</h2>
            <button type="button" class="btn btn-primary btn-sm">
              Primary
            </button>
          </div>
        </div>
        <product
          *ngFor="let product of products"
          [product]="product"
          class="col-lg-3 col-md-4 col-sm-6 col-12"
        ></product>
      </div>
    </div>
  `,
})
export class HomeComponent implements OnInit {
  products: Product[] = [];

  ngOnInit(): void {
    this.products = [
      {
        name: "The One",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores, sint exercitationem. ",
        img: "https://images.unsplash.com/photo-1646736722277-8e035a16e056?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=450&q=80",
      },
      {
        name: "The One",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores, sint exercitationem. ",
        img: "https://images.unsplash.com/photo-1635009981431-6134280a4639?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=450&q=80",
      },
      {
        name: "The One",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores, sint exercitationem. ",
        img: "https://images.unsplash.com/photo-1643304187561-022272be30ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=450&q=80",
      },
      {
        name: "The One",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores, sint exercitationem. ",
        img: "https://images.unsplash.com/photo-1643304187561-022272be30ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=450&q=80",
      },
    ];
  }
}
