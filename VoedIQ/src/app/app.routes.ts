import { Routes } from '@angular/router';
import { LandingComponent } from './features/landing/landing.component';
import { HomeComponent } from './features/home/home.component';
import { SandboxComponent } from './features/sandbox/sandbox.component';
import { EnergyCalculatorsComponent } from './features/energy-calculators/energy-calculators.component';
import { MacroMicroNutriCalculatorsComponent } from './features/macro-micro-nutri-calculators/macro-micro-nutri-calculators.component';

export const routes: Routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full' }, // Standaard naar landing
  { path: 'landing', component: LandingComponent },
  { path: 'home', component: HomeComponent },
  { path: 'energy-calculator', component: EnergyCalculatorsComponent },
  { path: 'nutri-calculator', component: MacroMicroNutriCalculatorsComponent },
  { path: 'sandbox', component: SandboxComponent },
];
