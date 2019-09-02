import { Injectable } from '@angular/core';
import { AngularFireAuth  } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public authState : Subject<boolean> = new Subject();

  constructor(
    private fAuth: AngularFireAuth,
    private router: Router
  ) { }

  login(email: string,password: string){
    return this.fAuth.auth.signInWithEmailAndPassword(email ,password)
          .then((auth) => {
            const { uid } = auth.user;
            localStorage.setItem('token', uid);
            this.router.navigate(['user'  , {uid}]);
            this.authState.next(true);
          })
          .catch((err) => console.log(err.message));
  }

  logout(){
    this.fAuth.auth.signOut().then((res) => {
      localStorage.removeItem('token');
      this.authState.next(false);
    });
  }

  doRegister(email: string,password: string){
    return firebase.auth().createUserWithEmailAndPassword(email,password);
  }



}
