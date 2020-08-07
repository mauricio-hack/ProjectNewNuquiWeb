import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { SendEmailComponent } from './auth/send-email/send-email.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PortafolioServiceComponent } from './pages/portafolio-service/portafolio-service.component';
import { AbautComponent } from './pages/abaut/abaut.component';
import { ItemComponent } from './pages/item/item.component';
import { ContactComponent } from './pages/contact/contact.component';
import { InfoPageService } from './services/info-page.service';
import {HttpClientModule} from '@angular/common/http';
import { ProductosService } from './services/productos.service';
import { AbautService } from './services/abaut.service';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    SendEmailComponent,
    HeaderComponent,
    FooterComponent,
    PortafolioServiceComponent,
    AbautComponent,
    ItemComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [
    InfoPageService,
    ProductosService,
    AbautService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
