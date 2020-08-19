import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { ProductoDetalleInterface } from 'src/app/interfaces/producto-detalle.interface';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.scss']
})
export class ReservasComponent implements OnInit {

  public  fomulario_reserva: FormGroup;
  public productoID: ProductoDetalleInterface;
  id: string;
  constructor(public _productosService: ProductosService,
    public _router: Router,
     private _ActivatedRoute: ActivatedRoute,
     private _FormBuilder: FormBuilder) { }

  ngOnInit(): void {

    
    this.fomulario_reserva = this._FormBuilder.group({
      servicio: [ '', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      cedula: ['', Validators.required],
      email:['',Validators.required],
      fecha_inicio:['',Validators.required],
      fecha_final:['',Validators.required]
    });

    //trae datos del producto
    this._ActivatedRoute.params.subscribe(resp => {
      this._productosService.getProducto(resp.id).subscribe((producto: ProductoDetalleInterface) => {
        this.id = resp.id;
        this.productoID = producto;
      });
    });
  }

  reservar(){
   console.log(this.fomulario_reserva.value);
  }

}
