import { Injectable, inject } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../environment.local";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class APIServices {
  constructor() {}
  http = inject(HttpClient);
  router = inject(Router);

  authToken: String = localStorage.getItem("auth-token") as String;

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
  apiPost(product: {
    name: String;
    description: String;
    price: Number;
    imgUrl: String;
  }) {
    const { name, description, price, imgUrl } = product;
    this.http
      .post(
        `${environment.apiUrl}/products/`,
        {
          name,
          description,
          price,
          ...(imgUrl && { imgUrl }),
        },
        {
          headers: new HttpHeaders({
            "x-auth-token": `${this.authToken}`,
          }),
        }
      )
      .subscribe(
        (resp: any) => {
          this.router.navigate([`/product/${resp._id}`]);
        },
        (err) => console.error(err)
      );
  }
  apiGetAllProducts() {
    return this.http.get(`${environment.apiUrl}/products/`);
  }
  apiGetProduct(id: String) {
    return this.http.get(`${environment.apiUrl}/products/${id}`);
  }
}
