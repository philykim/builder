import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-kitchen-remodeling',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './kitchen-remodeling.component.html',
  styleUrls: ['./kitchen-remodeling.component.css']
})
export class KitchenRemodelingComponent {
  images = [
    'assets/images/kitchen-remodeling/kitchen-1.webp',
    'assets/images/kitchen-remodeling/kitchen-2.webp',
    'assets/images/kitchen-remodeling/kitchen-3.webp',
    'assets/images/kitchen-remodeling/kitchen-4.webp',
    'assets/images/kitchen-remodeling/kitchen-5.webp',
    'assets/images/kitchen-remodeling/kitchen-6.webp',
    'assets/images/kitchen-remodeling/kitchen-7.webp',
    'assets/images/kitchen-remodeling/kitchen-8.webp',
    'assets/images/kitchen-remodeling/kitchen-9.webp'
  ];
}