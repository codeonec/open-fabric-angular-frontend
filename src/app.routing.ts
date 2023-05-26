import { Route, provideRouter } from "@angular/router";
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
];
export const appRouting = [provideRouter(routes)];
