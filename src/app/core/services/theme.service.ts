import { Injectable, signal, effect } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly DARK_CLASS = 'dark';
  private readonly STORAGE_KEY = 'portfolio-theme';

  readonly isDark = signal<boolean>(true);

  constructor() {
    this.initializeTheme();
    effect(() => {
      const dark = this.isDark();
      if (typeof document !== 'undefined' && document.body) {
        if (dark) {
          document.body.classList.add(this.DARK_CLASS);
        } else {
          document.body.classList.remove(this.DARK_CLASS);
        }
        try {
          localStorage.setItem(this.STORAGE_KEY, JSON.stringify(dark));
        } catch {}
      }
    });
  }

  private initializeTheme(): void {
    if (typeof localStorage !== 'undefined') {
      try {
        const stored = localStorage.getItem(this.STORAGE_KEY);
        if (stored !== null) {
          this.isDark.set(JSON.parse(stored));
          return;
        }
      } catch {}
    }
    this.isDark.set(true);
  }

  toggleTheme(): void {
    this.isDark.update(v => !v);
  }
}
