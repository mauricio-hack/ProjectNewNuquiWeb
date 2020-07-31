import {first} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {auth} from 'firebase/app';
import {User} from 'firebase';
import {AngularFireAuth} from '@angular/fire/auth';
import { from } from 'rxjs';


@Injectable()
export class AuthService {
  // public user: User;
  constructor(public afAuth: AngularFireAuth) { }

  // tslint:disable-next-line: typedef
  async sendVerificationEmail(): Promise<void>{
    return (await this.afAuth.auth.currentUser).sendEmailVerification();
  }

  // tslint:disable-next-line: typedef
  async login(email: string, password: string){
    try{
      const result = await this.afAuth.auth.signInWithEmailAndPassword(email, password);
      return result;
    }catch (error){
      console.log(error);
    }
  }

  // tslint:disable-next-line: typedef
  async register(email: string, password: string){
    try{
      const resul = await this.afAuth.auth.createUserWithEmailAndPassword(email, password);
      this.sendVerificationEmail();
      return resul;
    }catch (error){
      console.log(error);
    }
  }
 // tslint:disable-next-line: typedef
 async  logout(){

    try{
           await this.afAuth.auth.signOut();
        }catch (error){
      console.log(error);
    }
  }
  // getCurrentUser(){
  //   return  this.afAuth.authState.pipe(first()).toPromise();
  // }

}
