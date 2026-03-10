import { Component, input } from '@angular/core';
import { TimelineItem } from '../../../models/timeline-item.model';

@Component({
  selector: 'app-timeline',
  standalone: true,
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.css'
})
export class TimelineComponent {
  items = input.required<TimelineItem[]>();
}
