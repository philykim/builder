import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageService, Image } from '../image.service';

@Component({
  selector: 'app-bathroom-remodeling',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bathroom-remodeling.component.html',
  styleUrl: './bathroom-remodeling.component.css'
})
export class BathroomRemodelingComponent implements OnInit {
  images: Image[] = [];

  constructor(private imageService: ImageService) { }

  ngOnInit(): void {
    this.images = this.imageService.getImages('general');
  }
}
