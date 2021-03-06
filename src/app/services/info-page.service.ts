import { Injectable, ɵConsole } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPage } from '../interfaces/info-page.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPageService {

  info: InfoPage = {};
  cargada = false;

  constructor(private _HttpClient: HttpClient) {
    this.cargarInfo();
  }

private cargarInfo(){
  this._HttpClient.get('assets/data/data-page.json').subscribe((resp: InfoPage) => {
    this.cargada = true;
    this.info = resp;
});
}


}
