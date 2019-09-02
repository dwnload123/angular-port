import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {  

  public isLogged: boolean;
  
  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.authService.authState.subscribe((state) => {
      this.isLogged = state;
    })    
  }

  signIn(){
    this.router.navigate(['signin']);
  }

  signUp(){
    this.router.navigate(['signup']);
  }

  signOut(){
    this.authService.logout();
    this.router.navigate(['']);
  }
}
