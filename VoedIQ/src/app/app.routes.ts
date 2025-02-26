import { Routes } from '@angular/router';
import { LandingComponent } from './features/landing/landing.component';
import { HomeComponent } from './features/home/home.component';

export const routes: Routes = [
    { path: '', redirectTo: '/landing', pathMatch: 'full' },  // Standaard naar landing
    { path: 'landing', component: LandingComponent},
    { path: 'home', component: HomeComponent},  // Hier expliciet 'true' toevoegen
];
