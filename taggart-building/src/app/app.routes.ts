import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { BathroomRemodelingComponent } from './bathroom-remodeling/bathroom-remodeling.component';
import { KitchenRemodelingComponent } from './kitchen-remodeling/kitchen-remodeling.component';
import { FlooringComponent } from './flooring/flooring.component';
import { BasementRemodelingComponent } from './basement-remodeling/basement-remodeling.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'gallery', component: GalleryComponent },
    { path: 'bathroom-remodeling', component: BathroomRemodelingComponent },
    { path: 'kitchen-remodeling', component: KitchenRemodelingComponent },
    { path: 'flooring', component: FlooringComponent },
    { path: 'basement-remodeling', component: BasementRemodelingComponent }
];