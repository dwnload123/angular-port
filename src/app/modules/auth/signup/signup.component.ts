import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public signInForm = new FormGroup({
    name: new FormControl(''),
    user: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  doRegister(){
    const email = this.signInForm.value.email;
    const password = this.signInForm.value.password;
    this.authService.doRegister(email,password)
      .then((res) => console.log(`Usuario registrado com sucesso: ${res}`))
      .catch((err) => console.log(`Erro: ${err}`))
  }

}
