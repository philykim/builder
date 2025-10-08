import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { TestimonialService, Testimonial } from './testimonial.service';

describe('TestimonialService', () => {
  let service: TestimonialService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TestimonialService]
    });
    service = TestBed.inject(TestimonialService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch testimonials from the JSON file', () => {
    const mockTestimonials: Testimonial[] = [
      { text: 'Great service!', author: 'John Doe' }
    ];

    service.getTestimonials().subscribe(testimonials => {
      expect(testimonials.length).toBe(1);
      expect(testimonials).toEqual(mockTestimonials);
    });

    const req = httpMock.expectOne('assets/testimonials.json');
    expect(req.request.method).toBe('GET');
    req.flush(mockTestimonials);
  });
});