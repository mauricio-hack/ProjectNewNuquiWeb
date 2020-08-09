import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { abautInterface } from '../interfaces/abaut.interface';

@Injectable({
  providedIn: 'root'
})
export class AbautService {

  public equipo: abautInterface[] = [];

  constructor(private _HttpClient: HttpClient) {
    this.cargarEquipo();
   }

  public cargarEquipo(){
    this._HttpClient.get('https://nuquicore.firebaseio.com/equipo.json').subscribe((resp: abautInterface[]) => {
      this.equipo = resp;
       console.log(resp);
    });
  }
}
