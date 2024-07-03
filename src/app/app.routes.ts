import {Routes} from '@angular/router';
import {AnimalsListComponent} from './features/animals/components/animals-list/animals-list.component';
import {HomeComponent} from './features/home/components/home/home.component';
import {AnimalsFormComponent} from './features/animals/components/animals-form/animals-form.component';
import {AnimalsTableComponent} from './features/animals/components/animals-table/animals-table.component';
import {AnimalsCardsComponent} from './features/animals/components/animals-cards/animals-cards.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'animals',
    component: AnimalsListComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'table'
      },
      {
        path: 'table',
        component: AnimalsTableComponent
      },
      {
        path: 'cards',
        component: AnimalsCardsComponent
      }
    ]
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
