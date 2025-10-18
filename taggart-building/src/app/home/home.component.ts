import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Testimonial, TestimonialService } from '../testimonial.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  testimonials$: Observable<Testimonial[]>;

  constructor(private testimonialService: TestimonialService) {
    this.testimonials$ = of([]);
  }

  ngOnInit() {
    this.testimonials$ = this.testimonialService.getTestimonials();
  }
}