import { Component, OnInit } from '@angular/core';
import { Image, ImageService } from '../image.service';
import { Observable, of } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-kitchen-remodeling',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './kitchen-remodeling.component.html',
  styleUrls: ['./kitchen-remodeling.component.css']
})
export class KitchenRemodelingComponent implements OnInit {
  images$: Observable<Image[]>;

  constructor(private imageService: ImageService) {
    this.images$ = of([]);
  }

  ngOnInit() {
    this.images$ = this.imageService.getImages('kitchen-remodeling');
  }
}