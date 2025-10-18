import { Component, OnInit } from '@angular/core';
import { Image, ImageService } from '../image.service';
import { Observable, of } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-flooring',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './flooring.component.html',
  styleUrls: ['./flooring.component.css']
})
export class FlooringComponent implements OnInit {
  images$: Observable<Image[]>;

  constructor(private imageService: ImageService) {
    this.images$ = of([]);
  }

  ngOnInit() {
    this.images$ = this.imageService.getImages('flooring');
  }
}