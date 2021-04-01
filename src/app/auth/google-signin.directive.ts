import { Directive, HostListener } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';

@Directive({
  selector: '[appGoogleSignin]'
})
export class GoogleSigninDirective {

  constructor(private fireAuth: AngularFireAuth) {}

  //listen to click events on the element using this directive

  @HostListener('click')
  onClick() {
      this.fireAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

}
