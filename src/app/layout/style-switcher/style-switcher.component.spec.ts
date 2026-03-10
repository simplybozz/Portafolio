import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StyleSwitcherComponent } from './style-switcher.component';
import { ThemeService } from '../../core/services/theme.service';

describe('StyleSwitcherComponent', () => {
  let component: StyleSwitcherComponent;
  let fixture: ComponentFixture<StyleSwitcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StyleSwitcherComponent],
      providers: [ThemeService]
    }).compileComponents();

    fixture = TestBed.createComponent(StyleSwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
