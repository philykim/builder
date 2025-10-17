import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageService, Image } from '../image.service';

@Component({
  selector: 'app-basement-remodeling',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './basement-remodeling.component.html',
  styleUrl: './basement-remodeling.component.css'
})
export class BasementRemodelingComponent implements OnInit {
  images: Image[] = [];

  constructor(private imageService: ImageService) { }

  ngOnInit(): void {
    this.images = this.imageService.getImages('basement-remodeling');
  }
}
