import { Route, provideRouter } from "@angular/router";
const routes: Route[] = [
  {
    path: "",
    loadComponent: () =>
      import("./home.component").then((c) => c.HomeComponent),
  },
];
export const appRouting = [provideRouter(routes)];
