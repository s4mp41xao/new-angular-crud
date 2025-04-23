import { Routes } from '@angular/router';
import { HelloComponent } from './initial/hello/hello.component';
import { ListComponent } from './initial/list/list.component';
import { HelloGuardService } from './initial/hello/hello.guard.service';

export const routes: Routes = [
  {
    path: 'hello',
    component: HelloComponent,
    canActivate: [HelloGuardService],
    canActivateChild: [HelloGuardService],

    children: [
      {
        path: 'list',
        component: ListComponent,
      },
    ],
  },
];
