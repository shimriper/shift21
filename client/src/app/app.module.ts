import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { NavComponent } from './components/nav/nav.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthInterceptor } from './auth/auth-interceptor';
import { WeekCreateComponent } from './week/week-create/week-create.component';
import { AllWeeksComponent } from './week/all-weeks/all-weeks.component';


import { SidurListComponent } from './week/sidur-list/sidur-list.component';
import { UsersListComponent } from './admin/users-list/users-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PostCreateComponent,
    NavComponent,
    PostListComponent,
    SignupComponent,
    LoginComponent,
    WeekCreateComponent,
    AllWeeksComponent,
    SidurListComponent,
    UsersListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
