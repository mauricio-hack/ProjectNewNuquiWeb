import { Component, OnInit } from '@angular/core';
import { AuthService } from '../sercives/auth.service';
import { Observable } from 'rxjs';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.scss'],
  providers: [AuthService],
})
export class SendEmailComponent implements OnInit {

  public User$: Observable<any> = this.authSvc.afAuth.user;
  constructor(private authSvc: AuthService ) { }

  ngOnInit(): void {
  }

  public onSendEmail(): void{
    this.authSvc.sendVerificationEmail();
  }
}
