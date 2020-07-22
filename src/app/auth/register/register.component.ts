import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { AuthService } from '../sercives/auth.service';

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
  constructor(private authSvc: AuthService) { }

  ngOnInit(): void {
  }

  onRegister(){
    const{email, password} = this.registerForms.value;
    this.authSvc.register(email, password);
  }

}
