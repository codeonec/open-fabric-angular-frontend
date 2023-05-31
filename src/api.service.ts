import { Injectable, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../environment.local";

@Injectable({
  providedIn: "root",
})
export class APIServices {
  constructor() {}
  http = inject(HttpClient);
  getProducts(username: String, password: String) {
    this.http
      .post(`${environment.apiUrl}/auth/login`, { username, password })
      .subscribe(
        (resp) => console.log(resp),
        (err) => console.error(err)
      );
    return true;
  }
}
