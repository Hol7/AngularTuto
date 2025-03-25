import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { UserComponent } from './user/user.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
  { path:'', component:HomeComponent},
  { path: 'login', component: LoginComponent },   
  { path: 'about', component: AboutComponent },
  { path: 'signup', component: SignupComponent},
  { path:"user/:id/:name", component:UserComponent},
  { path: 'about', component: AboutComponent },
  { path: 'profile', component: ProfileComponent},
  { path: 'contact', component: ContactComponent },
  { path: '**', component: PageNotFoundComponent },
];
