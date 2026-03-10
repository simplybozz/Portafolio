import { Component, inject } from '@angular/core';
import { SectionService } from '../../core/services/section.service';
import { SectionTitleComponent } from '../../shared/components/section-title/section-title.component';
import { TimelineComponent } from '../../shared/components/timeline/timeline.component';
import { PERSONAL_INFO, EDUCATION, EXPERIENCE } from '../../data/portfolio.data';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [SectionTitleComponent, TimelineComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  readonly sectionService = inject(SectionService);
  personalInfo = PERSONAL_INFO;
  education = EDUCATION;
  experience = EXPERIENCE;
}
