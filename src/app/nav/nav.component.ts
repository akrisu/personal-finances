import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from './../user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(
    private router: Router,
    private userService: UserService,
  ) { }

  ngOnInit() {
  }

  public login(): void {
    this.userService.login();
    this.router.navigate(['profile'])
  }

  public logout(): void {
    this.userService.logout();
    this.router.navigate(['welcome']);
  }

  public isLoggedIn(): boolean {
    return this.userService.isLoggedIn;
  }

}
