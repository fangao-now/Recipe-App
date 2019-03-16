import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string;
  tokenInvalid = new Subject<string>();
  signUpFailed = new Subject<string>();

  constructor(private router: Router) { }

  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch(
      error => this.signUpFailed.next(error)
    );
  }

  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(
      response => {
        console.log(response);
        this.router.navigate(['/']);
        firebase.auth().currentUser.getIdToken()
        .then(
          (token: string) => this.token = token
        );
    })
    .catch(
      (error) => this.tokenInvalid.next(error)
    );
  }

  logoutUser() {
    this.router.navigate(['/']);
    firebase.auth().signOut();
    this.token = null;
  }

  getoken() {
    if (firebase.auth().currentUser) {
      firebase.auth().currentUser.getIdToken()
      .then(
        (token: string) => this.token = token
      )
      .catch(
        // error => console.log(error)
      );

      return this.token;
    }
    return null;
  }

  isLoggedIn() {
    return this.token != null;
  }
}
