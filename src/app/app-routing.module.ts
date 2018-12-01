import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {RegisterComponent} from './Shared/register/register.component';
import {AdminComponent} from './User/admin/admin.component';
import {AuthGuard} from './Guards/auth.guard';

const routes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'admin', component: AdminComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
