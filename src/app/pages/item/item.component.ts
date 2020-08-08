import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductoDetalleInterface } from '../../interfaces/producto-detalle.interface';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  public productoID: ProductoDetalleInterface;
    id:string;

  constructor(public _router: Router, private _ActivatedRoute: ActivatedRoute , public _productoService: ProductosService ) { }

  ngOnInit(): void {

    this._ActivatedRoute.params.subscribe((resp => {
    this._productoService.getProducto(resp.id)
    .subscribe((producto: ProductoDetalleInterface) => {
    this.id = resp.id;
    this.productoID = producto;
    });
  }));
  }
}
