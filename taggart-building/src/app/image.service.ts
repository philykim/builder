import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { ALL_IMAGES } from './generated-image-data';

export interface Image {
  url: string;
  alt: string;
  title: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor() { }

  getImages(category: string): Observable<Image[]> {
    const images = (ALL_IMAGES as any)[category] || [];
    return of(images);
  }

  getAllImages(): Observable<Image[]> {
    let allImages: Image[] = [];
    for (const category in ALL_IMAGES) {
      if (Object.prototype.hasOwnProperty.call(ALL_IMAGES, category)) {
        allImages = allImages.concat((ALL_IMAGES as any)[category]);
      }
    }
    return of(allImages);
  }
}