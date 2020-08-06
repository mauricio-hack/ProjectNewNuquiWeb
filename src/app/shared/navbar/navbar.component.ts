import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/sercives/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { InfoPageService } from '../../services/info-page.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [AuthService]
})
export class NavbarComponent implements OnInit {
  public user$: Observable <any> = this.authSrv.afAuth.user;
  constructor(private authSrv: AuthService, private router: Router, public _infoPageService: InfoPageService) { }

 // tslint:disable-next-line: typedef
  ngOnInit() {
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
