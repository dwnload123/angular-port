import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isLogged: boolean = false;

  constructor(
    private fAuth: AngularFireAuth
  ) { }

  login(email: string,password: string){
    return this.fAuth.auth.signInWithEmailAndPassword(email ,password);
  }

  logout(){
    this.fAuth.auth.signOut();
  }

  doRegister(email: string,password: string){
    return firebase.auth().createUserWithEmailAndPassword(email,password);
  }



}
