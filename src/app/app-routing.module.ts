import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SendEmailComponent } from './auth/send-email/send-email.component';
import { PortafolioServiceComponent } from './pages/portafolio-service/portafolio-service.component';
import { AbautComponent } from './pages/abaut/abaut.component';
import { ItemComponent } from './pages/item/item.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  // {
  //   path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  // },
  {
    path: 'login', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule)
  },
  {
     path: 'register', loadChildren: () => import('./auth/register/register.module').then(m => m.RegisterModule)
  },
  { path: 'forgot-password', loadChildren: () => import('./auth/forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule)
  },
  {
    path: 'verification-email', component: SendEmailComponent,
  },
  {
    path: 'abaut', component: AbautComponent
  },
  {
    path: 'item', component: ItemComponent
  },
  {
    path: 'contact', component: ContactComponent
  },
  {
     path: '', redirectTo : 'login', pathMatch: 'full'
   },
  {
    path: 'portafolio-service', component: PortafolioServiceComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
