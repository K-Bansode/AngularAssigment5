import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { filter } from 'rxjs';
import { AddUserComponentComponent } from './add-user-component/add-user-component.component';
import { EditUserCompnentComponent } from './edit-user-compnent/edit-user-compnent.component';
import { TableListViewUserListComponent } from './table-list-view-user-list/table-list-view-user-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { FilterComponent } from './filter/filter.component';

const routes: Routes = [
  {
    component:AddUserComponentComponent,
    path:'add-user-component'
  },
  {
    path:'table-list-view-user-list',
    component:TableListViewUserListComponent
  },
  {
    path:'user-list',
    component:UserListComponent
  },
  {
    path:'edit-user-compnent/:id',
    component:EditUserCompnentComponent
  },
  {
    path:'app-filter',
    component:FilterComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
