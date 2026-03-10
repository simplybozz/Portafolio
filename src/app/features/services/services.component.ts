import { Component, inject } from '@angular/core';
import { SectionService } from '../../core/services/section.service';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';
import { SERVICES } from '../../data/portfolio.data';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [SectionTitleComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  readonly sectionService = inject(SectionService);
  services = SERVICES;
}
