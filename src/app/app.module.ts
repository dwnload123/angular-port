import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { ButtonComponent } from './shared/button/button.component';
import { TitleComponent } from './shared/title/title.component';
import { HomeComponent } from './modules/home/home.component';
import { CardComponent } from './shared/card/card.component';
import { SigninComponent } from '../app/modules/auth/signin/signin.component';
import { SignupComponent } from '../app/modules/auth/signup/signup.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { ReactiveFormsModule } from '@angular/forms';

import { environment } from '../environments/environment';
import { AuthGuardService } from './services/auth/auth.guard';
import { UserComponent } from './modules/user/user.component';
import { UserInfoComponent } from './modules/user/user-info/user-info.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    TitleComponent,
    HomeComponent,
    CardComponent,
    SigninComponent,
    SignupComponent,
    UserComponent,
    UserInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFontAwesomeModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
