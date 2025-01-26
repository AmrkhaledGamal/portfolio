import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ServiceComponent } from './components/service/service.component';
import { SkillsComponent } from './components/skills/skills.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectComponent } from './components/project/project.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [
    NavbarComponent,
    HomeComponent,
    ServiceComponent,
    SkillsComponent,
    AboutComponent,
    ProjectComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'portfolio';

  scrollUp: boolean = false;

  constructor() {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        this.scrollUp = true;
      } else {
        this.scrollUp = false;
      }
    });
  }

  scrollTop(): void {
    window.scroll({
      top: 0,
    });
  }
}
