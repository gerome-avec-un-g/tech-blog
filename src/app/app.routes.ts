import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {JavaVersionComponent} from './java-version/java-version.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Home Page',
    component: HomeComponent,
  },
  {
    path: 'java-versions',
    title: 'Java Versions',
    component: JavaVersionComponent,
  },
];
