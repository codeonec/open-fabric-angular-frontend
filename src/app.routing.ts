import {
  Route,
  provideRouter,
  withComponentInputBinding,
} from "@angular/router";
import { authGuard } from "./auth.guard";
const routes: Route[] = [
  {
    path: "",
    loadComponent: () =>
      import("./home.component").then((c) => c.HomeComponent),
  },
  {
    path: "auth/login",
    loadComponent: () =>
      import("./login.component").then((c) => c.LoginComponent),
  },
  {
    path: "auth/register",
    loadComponent: () =>
      import("./register.component").then((c) => c.RegisterComponent),
  },
  {
    path: "product/:id",
    loadComponent: () =>
      import("./productDetail.component").then((c) => c.ProductDetailComponent),
  },
  {
    path: "create",
    canActivate: [authGuard],
    loadComponent: () =>
      import("./productForm.component").then((c) => c.ProductFormComponent),
  },
];
export const appRouting = [provideRouter(routes, withComponentInputBinding())];
