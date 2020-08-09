import { Component, OnInit } from '@angular/core';
import { InfoPageService } from '../../services/info-page.service';
import { AbautService } from '../../services/abaut.service';

@Component({
  selector: 'app-abaut',
  templateUrl: './abaut.component.html',
  styleUrls: ['./abaut.component.scss']
})
export class AbautComponent implements OnInit {

  constructor(public _abautService: AbautService ) { }

  ngOnInit(): void {
  }

}
