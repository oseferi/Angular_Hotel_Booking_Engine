import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccomodationComponent } from './accomodation/accomodation.component';
import { RoomsComponent } from './accomodation/rooms/rooms.component';
import { CelebrationsComponent } from './celebrations/celebrations.component';
import { FoodBeverageComponent } from './food-beverage/food-beverage.component';
import { RestaurantComponent } from './food-beverage/restaurant/restaurant.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { ExcursionsComponent } from './lifestyle/excursions/excursions.component';
import { ExperiencesComponent } from './lifestyle/experiences/experiences.component';
import { ResortActivitiesComponent } from './lifestyle/resort-activities/resort-activities.component';
import { WellnessAndSpaComponent } from './lifestyle/wellness-and-spa/wellness-and-spa.component';
import { OffersComponent } from './offers/offers.component';
import { WeddingsComponent } from './weddings/weddings.component';
import { ThaiWeddingsComponent } from './weddings/thai-weddings/thai-weddings.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';




const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'accomodation', component: AccomodationComponent },
  { path: 'accomodation/rooms', component: RoomsComponent },
  { path: 'celebrations', component: CelebrationsComponent },
  { path: 'food-beverage', component: FoodBeverageComponent },
  { path: 'lifestyle', component: LifestyleComponent },
  { path: 'offers', component: OffersComponent },
  { path: 'weddings', component: WeddingsComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent }
];

@NgModule({
  imports : [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
