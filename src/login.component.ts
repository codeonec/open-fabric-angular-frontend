import { Component, OnInit, Injectable, inject } from "@angular/core";
import { CommonModule } from "@angular/common";

import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { APIServices } from "./api.service";
import { HttpClientModule } from "@angular/common/http";
import { Router, RouterLink } from "@angular/router";
@Component({
  selector: "app-login",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule, RouterLink],
  template: `
    <div class="container pt-5">
      <div class="row justify-content-center">
        <div class="col-lg-6 col-md-8">
          <div class="card">
            <div class="card-header text-center">
              <h3>Login</h3>
            </div>
            <div class="card-body">
              <form [formGroup]="authForm" (ngSubmit)="auth()">
                <div class="form-group mb-3">
                  <label for="username" class="required">Username</label>
                  <input
                    type="username"
                    formControlName="username"
                    class="form-control"
                    id="username"
                    value="test2"
                    placeholder="Enter username"
                  />
                </div>
                <div class="form-group mb-3">
                  <label for="password" class="required">Password</label>
                  <input
                    type="password"
                    formControlName="password"
                    class="form-control"
                    id="password"
                    placeholder="Password"
                  />
                </div>
                <div class="form-group mb-3">
                  <label for="password"
                    >Don't have an account?
                    <a routerLink="/auth/register">Sign up</a></label
                  >
                </div>
                <button
                  type="submit"
                  class="btn btn-primary btn-block"
                  [disabled]="!authForm.valid"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
@Injectable()
export class LoginComponent implements OnInit {
  authForm: any;
  apiService = inject(APIServices);
  router = inject(Router);
  ngOnInit(): void {
    const authToken = localStorage.getItem("auth-token");
    if (authToken) {
      this.router.navigate(["/"]);
    }
    this.authForm = new FormGroup({
      username: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required),
    });
  }
  auth() {
    this.apiService.authLogin(
      this.authForm.value.username,
      this.authForm.value.password
    );
  }
}
