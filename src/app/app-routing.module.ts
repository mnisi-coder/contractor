import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BusinessComponent } from './pages/business/business.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  { path: '',title:"home Page", component: HomeComponent },
  { path: 'Business',title:"Business Page", component: BusinessComponent },
  { path: 'Register',title:"Register Page", component: RegisterComponent },
  { path: 'Profile',title:"Profile Page", component: ProfileComponent },
  { path: 'Services',title:"Services Page", component: ProfileComponent },
  { path: '**',title:"Not Found Page", component: NotFoundComponent , pathMatch: 'full' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
