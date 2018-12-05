import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegisterComponent} from './Shared/register/register.component';
import {AdminComponent} from './User/admin/admin.component';
import {AuthGuard} from './Guards/auth.guard';
import {NewsUpdateComponent} from './News/news-update/news-update.component';
import {NewsListComponent} from './News/news-list/news-list.component';
import {NewsAddComponent} from './News/news-add/news-add.component';
import {AppComponent} from './app.component';

const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
  {path: 'news', component: NewsListComponent},
  {path: 'news/update/:id', component: NewsUpdateComponent, canActivate: [AuthGuard]},
  {path: 'news/add', component: NewsAddComponent, canActivate: [AuthGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
