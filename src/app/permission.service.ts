import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { UserService } from './user.service';

@Injectable()
export class PermissionService implements CanActivate {

  constructor(
    private userService: UserService
  ) { }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return this.userService.isLoggedIn;
  }
}
