import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegisterComponent} from './Shared/register/register.component';
import {AdminComponent} from './User/admin/admin.component';
import {AuthGuard} from './Guards/auth.guard';
import {AdminGuard} from './Guards/admin.guard';
import {NewsUpdateComponent} from './News/news-update/news-update.component';
import {NewsListComponent} from './News/news-list/news-list.component';
import {NewsAddComponent} from './News/news-add/news-add.component';
import {NewsByIdComponent} from './News/news-by-id/news-by-id.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {LoginComponent} from './Shared/login/login.component';
import {CarListComponent} from './Car/car-list/car-list.component';
import {CarByIdComponent} from './Car/car-by-id/car-by-id.component';
import {ReviewListComponent} from './Review/review-list/review-list.component';
import {ReviewByIdComponent} from './Review/review-by-id/review-by-id.component';

const routes: Routes = [
  {path: '', component: NewsListComponent},
  {path: 'news/:id', component: NewsByIdComponent},
  {path: 'news/update/:id', component: NewsUpdateComponent, canActivate: [AdminGuard]},
  {path: 'news/add', component: NewsAddComponent, canActivate: [AdminGuard]},
  {path: 'cars', component: CarListComponent},
  {path: 'cars/:id', component: CarByIdComponent},
  {path: 'reviews', component: ReviewListComponent, canActivate: [AuthGuard]},
  {path: 'reviews/:id', component: ReviewByIdComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'admin', component: AdminComponent, canActivate: [AdminGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
