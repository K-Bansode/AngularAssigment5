import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddUserComponentComponent } from './add-user-component/add-user-component.component';

import { EditUserCompnentComponent } from './edit-user-compnent/edit-user-compnent.component';
import { DeleteUserComponentComponent } from './delete-user-component/delete-user-component.component';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms'; 
import{HttpClientModule} from '@angular/common/http';
import { UserListComponent } from './user-list/user-list.component';
import{UsersDataService} from './services/users-data.service';
import { TableListViewUserListComponent } from './table-list-view-user-list/table-list-view-user-list.component';
import { FilterPipe } from './AppPipes/filter.pipe';
import { FilterComponent } from './filter/filter.component';
import { DashboardWidgetComponent } from './dashboard-widget/dashboard-widget.component';



@NgModule({
  declarations: [
    AppComponent,
    AddUserComponentComponent,
    EditUserCompnentComponent,
    DeleteUserComponentComponent,
    UserListComponent,
    TableListViewUserListComponent,
    FilterPipe,
    FilterComponent,
    DashboardWidgetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
   
  ],
  providers: [UsersDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
