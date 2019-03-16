import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  @ViewChild('f') signInForm: NgForm;
  signInFailed = false;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.tokenInvalid.subscribe(
      () => {
        this.signInFailed = true;
        this.signInForm.reset();
      }
    );
  }

  onSignin(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.signInFailed = false;
    this.authService.signinUser(email, password);
  }
}
