import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { PermissionService } from './permission.service';
import { UserService } from './user.service';
import { ListService } from './list.service';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavComponent } from './nav/nav.component';

const routing: Routes = [
  {
    path: 'welcome',
    component: WelcomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [PermissionService]
  },
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    ProfileComponent,
    NotFoundComponent,
    NavComponent
  ],
  imports: [
    RouterModule.forRoot(routing),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    PermissionService,
    UserService,
    ListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
