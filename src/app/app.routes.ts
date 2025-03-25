import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
 
  { path: 'login', component: LoginComponent },
   {path:'home', component:HomeComponent},
  { path: 'about', component: AboutComponent },
  { path: 'signup', component: SignupComponent},
  { path: 'about', component: AboutComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: PageNotFoundComponent },
];
