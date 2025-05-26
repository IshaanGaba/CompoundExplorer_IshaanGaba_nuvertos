import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `
    <h1 style="
      text-align: center;
      margin: 24px 0 16px;
      font-size: 2.5rem;
      font-weight: 600;
      font-family: 'Segoe UI', sans-serif;
    ">
      Compound Explorer
    </h1>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {}
