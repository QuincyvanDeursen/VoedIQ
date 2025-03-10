import { Routes } from '@angular/router';
import { LandingComponent } from './features/landing/landing.component';
import { HomeComponent } from './features/home/home.component';
import { SandboxComponent } from './features/sandbox/sandbox.component';
import { ActivityBurnCalculatorComponent } from './features/activity-burn-calculator/activity-burn-calculator.component';

export const routes: Routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full' }, // Standaard naar landing
  { path: 'landing', component: LandingComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'activity-burn-calculator',
    component: ActivityBurnCalculatorComponent,
  },
  { path: 'sandbox', component: SandboxComponent },
];
