import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AsideComponent } from './layout/aside/aside.component';
import { StyleSwitcherComponent } from './layout/style-switcher/style-switcher.component';
import { ThemeService } from './core/services/theme.service';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    AsideComponent,
    StyleSwitcherComponent
  ],
  templateUrl: './app.html'
})
export class App implements OnInit {
  constructor() {
    inject(ThemeService);
  }

  private readonly router = inject(Router);

  ngOnInit(): void {
    const redirect = sessionStorage.getItem('redirect');
    if (redirect) {
      sessionStorage.removeItem('redirect');
      this.router.navigateByUrl(redirect);
    }
  }
}
