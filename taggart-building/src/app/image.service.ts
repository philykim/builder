import { Injectable } from '@angular/core';
import { IMAGE_DATA } from './generated-image-data';

export interface Image {
  src: string;
  alt: string;
}

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  constructor() { }

  getImages(category: string): Image[] {
    return IMAGE_DATA[category] || [];
  }
}