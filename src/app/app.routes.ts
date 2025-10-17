import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadComponent: () => import('./components/home/home').then((m) => m.Home) },
  {
    path: 'jorge',
    loadComponent: () =>
      import('./components/jorge-componente/jorge-componente').then((m) => m.JorgeComponente),
  },
  {
    path: 'angel',
    loadComponent: () =>
      import('./components/angel/angel').then((m) => m.Angel),
  },
  {
    path: 'ivan',
    loadComponent: () =>
      import('./components/ivan/ivan.component').then((m) => m.IvanComponent),},
       {
    path: 'juan',
    loadComponent: () =>
      import('./components/juan/juan.component').then((m) => m.JuanComponent),
  },
  { path: '**', redirectTo: 'home' },
];
