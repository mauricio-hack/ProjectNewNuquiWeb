import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-portafolio-service',
  templateUrl: './portafolio-service.component.html',
  styleUrls: ['./portafolio-service.component.scss']
})
export class PortafolioServiceComponent implements OnInit {

  constructor(public _productoService: ProductosService) { }

  ngOnInit(): void {
  }

}
