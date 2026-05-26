import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h2>Welcome to {{title}}!</h2>

    <router-outlet></router-outlet>
  `,
  standalone: false,
  styles: []
})
export class AppComponent {
  title = 'frontend';
}
