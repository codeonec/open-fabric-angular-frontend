import { Component, OnInit, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
// import { Product } from "./models";
import { ProductComponent } from "./product.component";
import { APIServices } from "./api.service";
import { BehaviorSubject, Observable, map } from "rxjs";
import { RouterLink } from "@angular/router";
@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule, ProductComponent, RouterLink],
  template: `
    <div class="container py-5">
      <div class="row gy-4">
        <div class="col-12 pb-4">
          <div class="d-flex justify-content-between">
            <h2>All Products</h2>
            <a
              routerLink="/create"
              class="btn btn-primary btn-sm align-self-center fw-medium"
            >
              Add product
            </a>
          </div>
        </div>
        <div
          class="col-12 d-flex-justify-content-center py-5"
          *ngIf="loading$ | async"
        >
          <div
            class="spinner-border text-secondary mx-auto d-block"
            role="status"
          >
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
        <product
          *ngFor="let product of products$ | async"
          [product]="product"
          class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12"
        ></product>
      </div>
    </div>
  `,
})
export class HomeComponent implements OnInit {
  products$!: Observable<any>;
  loading$ = new BehaviorSubject<boolean>(false);
  // products: Product[] = [];

  apiService = inject(APIServices);
  ngOnInit(): void {
    this.loading$.next(true);
    this.products$ = this.apiService.apiGetAllProducts().pipe(
      map((response) => {
        this.loading$.next(false);
        return response;
      })
    );
  }
}
