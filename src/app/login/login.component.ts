import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  invalidLogin: boolean;

  constructor(
    private router: Router,
    private authService: AuthService,
    private route: ActivatedRoute) {
      if (this.authService.isLoggedIn()) {
        this.router.navigate(['/']);
      }
    }

  signIn(credentials) {
    this.authService.login(credentials)
      .subscribe(result => {
        if (result) {
          const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
          // localStorage.setItem('returnUrl', returnUrl);
          localStorage.setItem('token', JSON.stringify(result));
          console.log(localStorage.getItem('token'));
          this.router.navigate([returnUrl]);
        } else {
          this.invalidLogin = true;
        }
      });
  }

}
