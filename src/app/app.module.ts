import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Shared/login/login.component';
import { NavBarComponent } from './Shared/nav-bar/nav-bar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule, MatDividerModule,
  MatExpansionModule,
  MatFormFieldModule, MatInputModule, MatListModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AdminComponent } from './User/admin/admin.component';
import { RegisterComponent } from './Shared/register/register.component';
import { NewsListComponent } from './News/news-list/news-list.component';
import { NewsAddComponent } from './News/news-add/news-add.component';
import { NewsUpdateComponent } from './News/news-update/news-update.component';
import { NewsByIdComponent } from './News/news-by-id/news-by-id.component';
import { WelcomeComponent } from './welcome/welcome.component';
import {BarRatingModule} from 'ngx-bar-rating';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavBarComponent,
    AdminComponent,
    RegisterComponent,
    NewsListComponent,
    NewsAddComponent,
    NewsUpdateComponent,
    NewsByIdComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatExpansionModule,
    MatCardModule,
    HttpClientModule,
    BarRatingModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatListModule,
    MatInputModule,
    MatDividerModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
