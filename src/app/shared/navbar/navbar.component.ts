import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/sercives/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [AuthService]
})
export class NavbarComponent implements OnInit {
  public isLogged = false;
  public user: any;
  constructor(private authSrv: AuthService) { }

 // tslint:disable-next-line: typedef
 async ngOnInit() {
    console.log('Navbar');
    this.user = await this.authSrv.getCurrentUser();
    if (this.user){
      this.isLogged = true;
    }
  }

  onLogout(){
    this.authSrv.logout();
  }

}
