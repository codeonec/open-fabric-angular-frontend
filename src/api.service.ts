import { Injectable, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../environment.local";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class APIServices {
  constructor() {}
  http = inject(HttpClient);
  router = inject(Router);

  authToken: String | null = localStorage.getItem("auth-token");

  authLogin(username: String, password: String) {
    this.http
      .post(`${environment.apiUrl}/auth/login`, {
        username: username,
        password: password,
      })
      .subscribe(
        (resp: any) => {
          if (resp?.token) {
            localStorage.setItem("auth-token", resp.token);
            this.router.navigate(["/"]);
          }
        },
        (err) => console.error(err)
      );
    return true;
  }
  authRegister(username: String, email: String, password: String) {
    this.http
      .post(`${environment.apiUrl}/auth/register`, {
        username,
        email,
        password,
      })
      .subscribe(
        (resp: any) => {
          if (resp?.message === "User registered") {
            this.router.navigate(["/auth/login"]);
          }
        },
        (err) => console.error(err)
      );
    return true;
  }
}
