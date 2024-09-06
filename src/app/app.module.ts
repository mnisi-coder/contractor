import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { ContractorComponent } from './pages/contractor/contractor.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { BusinessComponent } from './pages/business/business.component';
import { NavComponent } from './components/nav/nav.component';
import { CourasalComponent } from './components/courasal/courasal.component';
import { AboutComponent } from './components/about/about.component';
import { SponserComponent } from './components/sponser/sponser.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ServiceCardComponent } from './components/service-card/service-card.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { AddreviewsComponent } from './components/addreviews/addreviews.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { RouterOutlet,RouterLink } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesComponent,
    ContractorComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    BusinessComponent,
    NavComponent,
    CourasalComponent,
    AboutComponent,
    SponserComponent,
    ContactUsComponent,
    ServiceCardComponent,
    SearchbarComponent,
    ReviewsComponent,
    AddreviewsComponent,
    ProjectsComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
