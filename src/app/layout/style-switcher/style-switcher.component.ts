import { Component, inject } from '@angular/core';
import { ThemeService } from '../../core/services/theme.service';

@Component({
  selector: 'app-style-switcher',
  standalone: true,
  templateUrl: './style-switcher.component.html',
  styleUrl: './style-switcher.component.css'
})
export class StyleSwitcherComponent {
  readonly themeService = inject(ThemeService);
}
