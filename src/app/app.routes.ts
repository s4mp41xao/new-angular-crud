import { Routes } from '@angular/router';
import { HelloComponent } from './initial/hello/hello.component';
import { ListComponent } from './initial/list/list.component';

export const routes: Routes = [
  {
    path: 'hello',
    component: HelloComponent,
    children: [{ path: 'list', component: ListComponent }],
  },
];
