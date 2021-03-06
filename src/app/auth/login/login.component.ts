import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../sercives/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });
  constructor(private authsvc: AuthService, private  router: Router) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  async onLogin(){
    const {email, password} = this.loginForm.value;
    try{
    const user = await  this.authsvc.login(email, password);
    if (user && user.user.emailVerified){
     this.router.navigate(['/portafolio-service']);
// redirec
    }else if (user){
      this.router.navigate(['/verfication-email']);
    }else{
      this.router.navigate(['/register']);
    }
    }catch (error){
      console.log(error);
    }

  }

}
