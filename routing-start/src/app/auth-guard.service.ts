import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  CanActivateChild
} from "@angular/router";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { AuhtService } from "./auth-service";

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private _authService: AuhtService, private _router: Router) {}

  canActivate( route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> {
    return this._authService
      .isAuthenticate()
      .then((authenticationState: boolean) => {
        if (authenticationState) {
          return true;
        } else {
          this._router.navigate(["/"]);
        }
      });
  }

  canActivateChild(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> {
      return this.canActivate(route,state);
  }
}
