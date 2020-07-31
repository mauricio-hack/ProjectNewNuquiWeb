import { Component, OnInit } from '@angular/core';
import { AuthService } from '../sercives/auth.service';
import { FormControl } from '@angular/forms';
import { User } from 'firebase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
  providers: [AuthService]
})
export class ForgotPasswordComponent implements OnInit {

  UserEmail = new FormControl('');

  constructor(private authSvc: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  async onReset(){
    try{
      const email =  this.UserEmail.value;
      await this.authSvc.resetPassword(email);
      window.alert('email sent,check your inbox');
      this.router.navigate(['/login']);
    }catch (error){
      console.log(error);
    }
  }

}
