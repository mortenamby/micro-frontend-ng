import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'flights',
    loadComponent: () => import('mfe1/Component').then(m => m.AppComponent)
  },
];
