import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
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
export class App {
  constructor() {
    inject(ThemeService);
  }
}
