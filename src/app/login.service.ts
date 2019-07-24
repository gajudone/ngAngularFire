import { Injectable, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class LoginService implements OnInit {
    user: firebase.User;
  constructor(
    private afAuth: AngularFireAuth
  ) { }

ngOnInit(){
    this.afAuth.authState.subscribe( user => {
        console.log( user ); 
        this.user = user;
      })
}

  login() {
   console.log(this.user + "from login");
    //this.afAuth.auth.signInWithRedirect(new auth.GoogleAuthProvider());
    return true;
  }

  logout() {
    this.afAuth.auth.signOut();
  }
  getLoggedInUser() {
    return this.afAuth.authState;
  }
}