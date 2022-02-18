import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'userlist',component:UserListComponent},
  {path:'adduser',component:AddUserComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'**',component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
