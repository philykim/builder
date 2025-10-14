import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BathroomRemodelingComponent } from './bathroom-remodeling/bathroom-remodeling.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'bathroom-remodeling', component: BathroomRemodelingComponent }
];
