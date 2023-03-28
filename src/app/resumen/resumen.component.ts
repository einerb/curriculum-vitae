import { Component, OnInit } from '@angular/core';
import { CveinerbravoService } from '../services/cveinerbravo.service';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.css']
})
export class ResumenComponent implements OnInit {

  constructor(public cv: CveinerbravoService) { }

  ngOnInit(): void {
  }

}
