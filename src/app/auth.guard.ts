import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { catchError, map, Observable, of } from 'rxjs';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authenticatioService: AuthenticationService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const token = localStorage.getItem("token");
    
    if (token) {
      return this.authenticatioService.validateToken().pipe(
        map((r) => {
          if (r.success) {
            return true;  // Token is valid
          } else {
            this.router.navigate(['/login']);  // Redirect to login
            localStorage.clear()
            return false;  // Invalid token, block access
          }
        }),
        catchError(() => {
          this.router.navigate(['/login']);  // Redirect on error
          return of(false);  // Return false on error
        })
      );
    }

    // No token found, redirect to login
    this.router.navigate(['/login']);
    return false;
  }
}
  

