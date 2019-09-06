import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private route: Router) { }
  canActivate() {
    if (this.authService.isLoggedIn()) {
      return true;
    }
    this.route.navigate(['/login']);
    return false;
  }
}
