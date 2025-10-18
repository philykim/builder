import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Image, ImageService } from '../image.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class GalleryComponent implements OnInit {
  images$: Observable<Image[]>;

  constructor(private imageService: ImageService) {
    this.images$ = of([]);
  }

  ngOnInit(): void {
    this.images$ = this.imageService.getAllImages();
  }
}