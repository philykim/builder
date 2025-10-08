import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Testimonial, TestimonialService } from '../testimonial.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  testimonials$: Observable<Testimonial[]> | undefined;

  constructor(private testimonialService: TestimonialService) { }

  ngOnInit(): void {
    this.testimonials$ = this.testimonialService.getTestimonials();
  }
}