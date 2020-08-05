import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SendEmailComponent } from './auth/send-email/send-email.component';
import { PortafolioServiceComponent } from './pages/portafolio-service/portafolio-service.component';

const routes: Routes = [
  {
    path: '', redirectTo:"/login", pathMatch: 'full'
  },
  // {
  //   path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  // },
  {
    path: 'login', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule)
  },
  {
     path: 'register', loadChildren: () => import('./auth/register/register.module').then(m => m.RegisterModule)
  },
  {
    path: 'verification-email', component: SendEmailComponent,
  },
  {
    path: 'portafolio-service', component: PortafolioServiceComponent,
  },
  { path: 'forgot-password', loadChildren: () => import('./auth/forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
