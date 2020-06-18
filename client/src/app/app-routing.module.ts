import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeekCreateComponent } from './week/week-create/week-create.component';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { AllWeeksComponent } from './week/all-weeks/all-weeks.component';
import { SidurListComponent } from './week/sidur-list/sidur-list.component';
import { UsersListComponent } from './admin/users-list/users-list.component';

import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'post-create', component: PostCreateComponent, canActivate: [AuthGuard] },
  { path: 'week-create', component: WeekCreateComponent, canActivate: [AuthGuard] },
  { path: 'all-weeks', component: AllWeeksComponent, canActivate: [AuthGuard] },
  { path: 'sidur-list', component: SidurListComponent, canActivate: [AuthGuard] },
  { path: 'users-list', component: UsersListComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
