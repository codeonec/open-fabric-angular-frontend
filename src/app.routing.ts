import {
  Route,
  provideRouter,
  withComponentInputBinding,
} from "@angular/router";
const routes: Route[] = [
  {
    path: "",
    loadComponent: () =>
      import("./home.component").then((c) => c.HomeComponent),
  },
  {
    path: "auth",
    loadComponent: () =>
      import("./login.component").then((c) => c.LoginComponent),
  },
  {
    path: "product/:id",
    loadComponent: () =>
      import("./productDetail.component").then((c) => c.ProductDetailComponent),
  },
];
export const appRouting = [provideRouter(routes, withComponentInputBinding())];
