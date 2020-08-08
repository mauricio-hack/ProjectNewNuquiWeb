import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { productoInterface } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  public cargando = true;
  productos: productoInterface[] = [];
  constructor(private _HttpClient: HttpClient) {
    this.cargarProducto();
  }

  private  cargarProducto(){
    this._HttpClient.get('https://nuquicore.firebaseio.com/productos_idx.json').subscribe((resp: productoInterface[]) => {
    this.productos = resp;
    this.cargando = false;
    });
  }

    public getProducto(id:string){

      return  this._HttpClient.get(`https://nuquicore.firebaseio.com/productos/${id}.json` );
    }
}
