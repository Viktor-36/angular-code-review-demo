import {Routes} from '@angular/router';
import {AnimalsListComponent} from './features/animals/components/animals-list/animals-list.component';
import {HomeComponent} from './features/home/components/home/home.component';
import {AnimalsFormComponent} from './features/animals/components/animals-form/animals-form.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'animals',
    component: AnimalsListComponent,
  },
  {
    path: 'animals/add',
    component: AnimalsFormComponent
  },
  {
    path: '**',
    redirectTo: '',
  },
];
