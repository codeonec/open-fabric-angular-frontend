import { inject } from "@angular/core";
import { Router } from "@angular/router";

export const authGuard = () => {
  const router = inject(Router);

  if (localStorage.getItem("auth-token")) {
    return true;
  }
  // Redirect to the login page
  return router.parseUrl("/auth/login");
};
