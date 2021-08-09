import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { AuthService } from "../services/auth.service";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  /**
   * Creates an instance of auth guard.
   * @param authService control the state of the user
   * @param router provides navigation and URL manipulation capabilities
   */
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  /**
   * Deciding if a route can be activated
   * @param next Contains the information about a route associated
   * @param state Represents the state of the router at a moment in time
   * @returns true if the user is logged in, false otherwise
   */
  

   canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
      return this.authService.isAuthenticated()
        .pipe(
          tap(loggedIn => {
           
            if (!loggedIn) {
              this.router.navigate(['/login']);
            }
          })
        );
  }
}