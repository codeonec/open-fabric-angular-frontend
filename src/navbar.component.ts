import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router, RouterLink } from "@angular/router";
@Component({
  selector: "app-navbar",
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <nav class="navbar border-bottom">
      <div class="container">
        <a routerLink="/" class="navbar-brand" href="#"> ProdApp</a>
        <div class="signInBtn" (click)="handleClick()">
          {{ auth ? "Sign Out" : "Sign in" }}
        </div>
      </div>
    </nav>
  `,
  styles: [
    `
      .navbar: {
        background: #0f1623;
      }
    `,
  ],
})
export class NavComponent {
  auth = localStorage.hasOwnProperty("auth-token");
  router = inject(Router);

  handleClick() {
    if (this.auth) {
      localStorage.removeItem("auth-token");
      this.router.navigate(["/auth/login"]);
    } else {
      this.router.navigate(["/auth/login"]);
    }
  }
}
