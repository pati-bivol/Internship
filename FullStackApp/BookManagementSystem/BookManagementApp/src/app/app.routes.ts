import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    loadChildren: () =>
      import('./pages/home/home.component.routes').then((r) => r.HOME_ROUTES),
  },
];
