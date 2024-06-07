import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'about',
    loadComponent: () => import('mfe1/Module').then(m => m.AboutComponent)
  }
];
