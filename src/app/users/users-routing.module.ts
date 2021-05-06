import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import { UsersHomeComponent } from './users-home/users-home.component';
import { ViewUsersComponent } from './view-users/view-users.component';

const routes: Routes = [
  {
    path: '',
    component: UsersHomeComponent,
    children: [
      {
        path: 'create',
        component: CreateUserComponent,
      },
      {
        path: 'view',
        component: ViewUsersComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
