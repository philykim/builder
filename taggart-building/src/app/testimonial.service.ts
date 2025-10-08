import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Testimonial {
  text: string;
  author: string;
}

@Injectable({
  providedIn: 'root'
})
export class TestimonialService {
  private testimonialsUrl = 'assets/testimonials.json';

  constructor(private http: HttpClient) { }

  getTestimonials(): Observable<Testimonial[]> {
    return this.http.get<Testimonial[]>(this.testimonialsUrl);
  }
}