import { Observable } from "rxjs";
import {
  CanDeactivate,
  ActivatedRoute,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from "@angular/router";

export interface CanComponenetDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

export class CanDeactivateGuard
  implements CanDeactivate<CanComponenetDeactivate> {
  canDeactivate(
    component: CanComponenetDeactivate,
    currentRounte: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
      return component.canDeactivate();
  }
}
