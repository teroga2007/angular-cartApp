import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CartAppComponent } from './components/cart-app.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'catalogue',
    component: CartAppComponent,
  },
];
