import { Component } from '@angular/core';
import { InfoPageService } from './services/info-page.service';
import { ProductosService } from './services/productos.service';
import { AbautService } from './services/abaut.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'projectWebNuqui';

constructor(public _infoPageService: InfoPageService,
            public _productosService: ProductosService,
            public _abautService: AbautService)  {

}

}
