import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { KitchenBathroomRemodelingComponent } from './kitchen-bathroom-remodeling/kitchen-bathroom-remodeling.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'kitchen-bathroom-remodeling', component: KitchenBathroomRemodelingComponent }
];
