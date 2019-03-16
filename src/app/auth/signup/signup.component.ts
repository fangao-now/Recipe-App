import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signUpFailed = false;
  signUpErrorMessage = '';

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.signUpFailed.subscribe(
      (error) => {
        this.signUpErrorMessage = error;
        this.signUpFailed = true;
      }
    );
  }

  onSignup(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.signUpFailed = false;
    this.authService.signupUser(email, password);
  }

}
