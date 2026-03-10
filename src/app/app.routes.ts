import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent) },
  { path: 'sobre-mi', loadComponent: () => import('./features/about/about.component').then(m => m.AboutComponent) },
  { path: 'servicios', loadComponent: () => import('./features/services/services.component').then(m => m.ServicesComponent) },
  { path: 'portafolio', loadComponent: () => import('./features/portfolio/portfolio.component').then(m => m.PortfolioComponent) },
  { path: '**', redirectTo: '' }
];
