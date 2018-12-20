import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegisterComponent} from './Shared/register/register.component';
import {AdminComponent} from './User/admin/admin.component';
import {AdminGuard} from './Guards/admin.guard';
import {NewsUpdateComponent} from './News/news-update/news-update.component';
import {NewsListComponent} from './News/news-list/news-list.component';
import {NewsAddComponent} from './News/news-add/news-add.component';
import {NewsByIdComponent} from './News/news-by-id/news-by-id.component';
import {LoginComponent} from './Shared/login/login.component';
import {CarListComponent} from './Car/car-list/car-list.component';
import {CarByIdComponent} from './Car/car-by-id/car-by-id.component';

const routes: Routes = [
  {path: '', component: NewsListComponent},
  {path: 'news/:id', component: NewsByIdComponent},
  {path: 'news/update/:id', component: NewsUpdateComponent, canActivate: [AdminGuard]},
  {path: 'news/add', component: NewsAddComponent, canActivate: [AdminGuard]},
  {path: 'cars', component: CarListComponent},
  {path: 'cars/:id', component: CarByIdComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'admin', component: AdminComponent, canActivate: [AdminGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
