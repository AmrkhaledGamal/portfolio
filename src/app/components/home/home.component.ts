import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  loading = false;

  downloadCV() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 500);
  }
}
