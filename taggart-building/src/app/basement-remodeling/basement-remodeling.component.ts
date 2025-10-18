import { Component, OnInit } from '@angular/core';
import { Image, ImageService } from '../image.service';
import { Observable, of } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-basement-remodeling',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './basement-remodeling.component.html',
  styleUrls: ['./basement-remodeling.component.css']
})
export class BasementRemodelingComponent implements OnInit {
  images$: Observable<Image[]>;

  constructor(private imageService: ImageService) {
    this.images$ = of([]);
  }

  ngOnInit() {
    this.images$ = this.imageService.getImages('basement-remodeling');
  }
}