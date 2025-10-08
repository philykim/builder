import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

import { HomeComponent } from './home.component';
import { TestimonialService } from '../testimonial.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let testimonialService: TestimonialService;

  const mockTestimonials = [
    { text: 'Testimonial 1', author: 'Author 1' },
    { text: 'Testimonial 2', author: 'Author 2' },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent, HttpClientTestingModule, RouterTestingModule],
      providers: [
        {
          provide: TestimonialService,
          useValue: {
            getTestimonials: () => of(mockTestimonials),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    testimonialService = TestBed.inject(TestimonialService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch testimonials on init', () => {
    component.ngOnInit();
    component.testimonials$?.subscribe((testimonials) => {
      expect(testimonials.length).toBe(2);
      expect(testimonials).toEqual(mockTestimonials);
    });
  });
});