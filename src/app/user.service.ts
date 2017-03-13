import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  private token: string = 'token';
  public isLoggedIn: boolean = false;

  constructor() {
    this.isLoggedIn = localStorage.getItem('token') === this.token;
  }

  public login(): void {
    this.isLoggedIn = true;
    localStorage.setItem('token', this.token);
  }

  public logout(): void {
    this.isLoggedIn = false;
    localStorage.removeItem('token');
  }

}
