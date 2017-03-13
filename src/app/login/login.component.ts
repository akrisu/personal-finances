import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from './../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  public login(): void {
    this.userService.login();
    this.router.navigate(['profile']);
  }

  public logout(): void {
    this.userService.logout();
    this.router.navigate(['welcome']);
  }

  public isLoggedIn(): boolean {
    return this.userService.isLoggedIn;
  }

}
