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
    console.log('IMAGE_DATA:', IMAGE_DATA);
    return IMAGE_DATA[category] || [];
  }
}