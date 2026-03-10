import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SectionService {
  readonly isAsideOpen = signal<boolean>(false);

  toggleAside(): void {
    this.isAsideOpen.update(v => !v);
  }

  closeAside(): void {
    this.isAsideOpen.set(false);
  }
}
