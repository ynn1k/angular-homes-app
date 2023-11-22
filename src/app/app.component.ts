import { Component } from '@angular/core';
import { HomeComponent } from "./home/home.component";
import {RouterModule} from "@angular/router";

@Component({
  standalone: true,
  selector: 'app-root',
  template: `
    <main>
        <header class="brand-name">
            <img src="/assets/logo.svg" alt="logo">
        </header>
    </main>
    <section class="content">
        <router-outlet></router-outlet>
    </section>
  `,
  styleUrls: ['./app.component.css'],
  imports: [HomeComponent, RouterModule]
})
export class AppComponent {
  title = 'homes';
}
