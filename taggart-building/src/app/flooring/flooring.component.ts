import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageService, Image } from '../image.service';

@Component({
  selector: 'app-flooring',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './flooring.component.html',
  styleUrl: './flooring.component.css'
})
export class FlooringComponent implements OnInit {
  images: Image[] = [];

  constructor(private imageService: ImageService) { }

  ngOnInit(): void {
    this.images = this.imageService.getImages('flooring');
  }
}
