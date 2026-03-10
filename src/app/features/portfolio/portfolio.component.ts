import { Component, inject } from '@angular/core';
import { SectionService } from '../../core/services/section.service';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';
import { PORTFOLIO_ITEMS } from '../../data/portfolio.data';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [SectionTitleComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  readonly sectionService = inject(SectionService);
  portfolioItems = PORTFOLIO_ITEMS;
}
