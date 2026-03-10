# Arquitectura del Portafolio

## Estructura del Proyecto

Cada componente sigue la convención de 4 archivos: lógica (.ts), plantilla (.html), estilos (.css) y pruebas (.spec.ts).

```
Portafolio/
├── src/
│   ├── app/
│   │   ├── core/
│   │   │   └── services/
│   │   │       ├── section.service.ts
│   │   │       └── theme.service.ts
│   │   ├── data/
│   │   │   └── portfolio.data.ts
│   │   ├── features/
│   │   │   ├── about/
│   │   │   ├── home/
│   │   │   ├── portfolio/
│   │   │   └── services/
│   │   ├── layout/
│   │   │   ├── aside/
│   │   │   └── style-switcher/
│   │   ├── models/
│   │   └── shared/
│   │       └── components/
│   │           ├── section-title/
│   │           └── timeline/
│   ├── index.html
│   └── styles.css
├── public/
│   └── recursos/
├── angular.json
└── package.json
```

Los estilos globales están en `src/styles.css`. Cada componente tiene sus propios estilos en su archivo `.css`.

## Rutas (Angular Router)

| Ruta | Componente |
|------|------------|
| / | HomeComponent |
| /sobre-mi | AboutComponent |
| /servicios | ServicesComponent |
| /portafolio | PortfolioComponent |

Los componentes de sección se cargan de forma lazy. Cualquier ruta no definida redirige a la página principal.

## Componentes

| Componente | Responsabilidad |
|------------|-----------------|
| App | Contenedor principal, RouterOutlet, layout |
| AsideComponent | Navegación con routerLink y routerLinkActive |
| StyleSwitcherComponent | Toggle dark/light mode |
| HomeComponent | Página de inicio con animación Typed.js |
| AboutComponent | Sobre mí, educación, experiencia |
| ServicesComponent | Listado de servicios |
| PortfolioComponent | Grid de proyectos |
| SectionTitleComponent | Título reutilizable |
| TimelineComponent | Línea de tiempo reutilizable |

## Servicios

| Servicio | Responsabilidad |
|----------|-----------------|
| SectionService | Estado del menú lateral (mobile), toggle y cierre |
| ThemeService | Tema dark/light, persistencia en localStorage |

## Datos

Todo el contenido está centralizado en `src/app/data/portfolio.data.ts`:
- PERSONAL_INFO
- EDUCATION
- EXPERIENCE
- SERVICES
- PORTFOLIO_ITEMS

## Comandos

- `npm start` - Servidor de desarrollo en http://localhost:4200
- `npm run build` - Build de producción en dist/portafolio-app
