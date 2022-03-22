import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PriceCalculatorComponent } from './price-calculator/price-calculator.component';
import { FaqComponent } from './faq/faq.component';
import { ContactComponent } from './contact/contact.component';
import { CartComponent } from './cart/cart.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AuthGuard } from '@auth0/auth0-angular';


const routes: Routes = [


  {
    path:'',
    component: HomeComponent,
    pathMatch: 'full'
  },

  {
    path:'about',
    component: AboutComponent
  },
  
  {
    path:'price_calc',
    component: PriceCalculatorComponent
  },

  {
    path:'contact',
    component: ContactComponent 
  },

  {
    path:'faq',
    component: FaqComponent
  },

  {
    path:'cart',
    component: CartComponent
  },


  { path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule), canActivate: [AuthGuard]},


  { path: 'profile', loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule),  canActivate: [AuthGuard] },


  { path: 'editprofile', loadChildren: () => import('./editprofile/editprofile.module').then(m => m.EditprofileModule), canActivate: [AuthGuard] },

  { 
    path: '**', 
    //wildcard
    component: PagenotfoundComponent
  },

  

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
