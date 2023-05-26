import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-login",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container pt-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="card">
            <div class="card-header text-center">
              <h3>Login</h3>
            </div>
            <div class="card-body">
              <form>
                <div class="form-group mb-3">
                  <label for="email">Email address</label>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    placeholder="Enter email"
                  />
                </div>
                <div class="form-group mb-3">
                  <label for="password">Password</label>
                  <input
                    type="password"
                    class="form-control"
                    id="password"
                    placeholder="Password"
                  />
                </div>
                <button type="submit" class="btn btn-primary btn-block">
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
export class LoginComponent {
  constructor() {}
}
