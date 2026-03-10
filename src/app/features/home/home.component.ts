import { Component, inject, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { SectionService } from '../../core/services/section.service';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  readonly sectionService = inject(SectionService);

  @ViewChild('typedElement', { read: ElementRef }) typedElement!: ElementRef<HTMLElement>;
  private typedInstance: Typed | null = null;

  ngAfterViewInit(): void {
    if (this.typedElement?.nativeElement) {
      this.typedInstance = new Typed(this.typedElement.nativeElement, {
        strings: ['BackEnd', 'FrontEnd'],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
      });
    }
  }

  ngOnDestroy(): void {
    this.typedInstance?.destroy();
  }
}
