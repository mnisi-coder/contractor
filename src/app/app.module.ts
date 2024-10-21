import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
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
import { LogoComponent } from './components/logo/logo.component';
import { FooterComponent } from './components/footer/footer.component';
import { ServicesProfilesComponent } from './components/services-profiles/services-profiles.component';
import { BackToSearchComponent } from './components/back-to-search/back-to-search.component';
import { PhotosProfileComponent } from './components/photos-profile/photos-profile.component';
import { DescriptionProfileComponent } from './components/description-profile/description-profile.component';
import { ContactBusinessComponent } from './components/contact-business/contact-business.component';
import { StickyFooterComponent } from './components/sticky-footer/sticky-footer.component';
import { LoginRegisterComponent } from './components/login-register/login-register.component';
import { TestimonialsBusinessComponent } from './components/testimonials-business/testimonials-business.component';
import {WhatCustomersSayComponent} from './components/what-customers-say/what-customers-say.component';

 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesComponent,
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
    NotFoundComponent,
    FooterComponent,
    ServicesProfilesComponent,
    LogoComponent,
    BackToSearchComponent,
    PhotosProfileComponent,
    DescriptionProfileComponent,
    ContactBusinessComponent,
    StickyFooterComponent,
    LoginRegisterComponent,
    TestimonialsBusinessComponent,
    WhatCustomersSayComponent,
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
