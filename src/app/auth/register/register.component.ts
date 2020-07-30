import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { AuthService } from '../sercives/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [AuthService]
})
export class RegisterComponent implements OnInit {
  registerForms = new FormGroup({
    email: new FormControl(''),
    password: new FormControl (''),
  });
  constructor(private authSvc: AuthService, private router : Router) { }

  ngOnInit(): void {
  }

  async onRegister(){
    const{email, password} = this.registerForms.value;
    try{
      const user =  await this.authSvc.register(email, password);
      if (user){
        // redirec
        this.router.navigate(['/home']);
      }
    }catch (error){
      console.log(error);
    }
  }

}
