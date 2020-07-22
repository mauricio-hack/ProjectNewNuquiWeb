import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/sercives/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [AuthService]
})
export class NavbarComponent implements OnInit {
  public isLogged = false;
  public user: any;
  constructor(private authSrv: AuthService, private router: Router) { }

 // tslint:disable-next-line: typedef
 async ngOnInit() {
    this.user = await this.authSrv.getCurrentUser();
    if (this.user){
      this.isLogged = true;
    }
  }

 async onLogout(){
    try{
     await this.authSrv.logout();
     this.router.navigate(['/login']);
    }catch (error){
      console.log(error);
    }
   
  }

}
