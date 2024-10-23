import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BusinessComponent } from './pages/business/business.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ServicesComponent } from './pages/services/services.component';
import { LoginComponent } from './pages/login/login.component';


const routes: Routes = [
  { path: '',title:"Service Page", component: ServicesComponent },
  { path: 'Business/:id',title:"Business Page", component: BusinessComponent },
  { path: 'Home',title:"home Page", component: HomeComponent },
  { path: 'Register',title:"Register Page", component: RegisterComponent },
  { path: 'Login',title:"Login Page", component: LoginComponent },
  { path: 'Profile',title:"Profile Page", component: ProfileComponent },
  { path: '**',title:"Not Found Page", component: NotFoundComponent , pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
