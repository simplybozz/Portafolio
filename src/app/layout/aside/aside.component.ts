import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SectionService } from '../../core/services/section.service';

interface NavItem {
  path: string;
  icon: string;
  label: string;
  exact?: boolean;
}

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.css'
})
export class AsideComponent {
  readonly sectionService = inject(SectionService);

  navItems: NavItem[] = [
    { path: '/', icon: 'home', label: 'Inicio', exact: true },
    { path: '/sobre-mi', icon: 'user', label: 'Sobre mí' },
    { path: '/servicios', icon: 'list', label: 'Servicios' },
    { path: '/portafolio', icon: 'briefcase', label: 'Portafolio' }
  ];

  toggleAside(): void {
    this.sectionService.toggleAside();
  }
}
