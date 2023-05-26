import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";
@Component({
  selector: "app-navbar",
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <nav class="navbar border-bottom">
      <div class="container">
        <a routerLink="/" class="navbar-brand" href="#">Navbar</a>
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
export class NavComponent {}
