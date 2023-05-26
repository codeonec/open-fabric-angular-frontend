import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
@Component({
  selector: "app-navbar",
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="navbar border-bottom">
      <div class="container">
        <a class="navbar-brand" href="#">Navbar</a>
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
