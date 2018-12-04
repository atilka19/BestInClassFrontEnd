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
  MatFormFieldModule, MatInputModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AdminComponent } from './User/admin/admin.component';
import { RegisterComponent } from './Shared/register/register.component';
import { NewsListComponent } from './News/news-list/news-list.component';
import { NewsAddComponent } from './News/news-add/news-add.component';
import { NewsDeleteComponent } from './News/news-delete/news-delete.component';
import { NewsUpdateComponent } from './News/news-update/news-update.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavBarComponent,
    AdminComponent,
    RegisterComponent,
    NewsListComponent,
    NewsAddComponent,
    NewsDeleteComponent,
    NewsUpdateComponent
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
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
