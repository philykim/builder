import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageService, Image } from '../image.service';

@Component({
  selector: 'app-kitchen-remodeling',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './kitchen-remodeling.component.html',
  styleUrls: ['./kitchen-remodeling.component.css']
})
export class KitchenRemodelingComponent implements OnInit {
  images: Image[] = [];

  constructor(private imageService: ImageService) { }

  ngOnInit(): void {
    this.images = this.imageService.getImages('kitchen-remodeling');
  }
}
