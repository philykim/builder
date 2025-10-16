import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BathroomRemodelingComponent } from './bathroom-remodeling/bathroom-remodeling.component';
import { KitchenRemodelingComponent } from './kitchen-remodeling/kitchen-remodeling.component';
import { FlooringComponent } from './flooring/flooring.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'bathroom-remodeling', component: BathroomRemodelingComponent },
    { path: 'kitchen-remodeling', component: KitchenRemodelingComponent },
    { path: 'flooring', component: FlooringComponent }
];