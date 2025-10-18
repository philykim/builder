import { Component, OnInit } from '@angular/core';
import { Image, ImageService } from '../image.service';
import { Observable, of } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bathroom-remodeling',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bathroom-remodeling.component.html',
  styleUrls: ['./bathroom-remodeling.component.css']
})
export class BathroomRemodelingComponent implements OnInit {
  images$: Observable<Image[]>;

  constructor(private imageService: ImageService) {
    this.images$ = of([]);
  }

  ngOnInit() {
    this.images$ = this.imageService.getImages('bathroom-remodeling');
  }
}