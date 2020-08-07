import { Component } from '@angular/core';
import { InfoPageService } from './services/info-page.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'projectWebNuqui';

constructor(public _infoPageService: InfoPageService)  {

}

}
