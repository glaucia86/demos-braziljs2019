import { Component, OnInit } from '@angular/core';
import Palestrante from '../Palestrante';
import { PalestranteService } from '../palestrante.service';

@Component({
  selector: 'app-palestrante-get',
  templateUrl: './palestrante-get.component.html',
  styleUrls: ['./palestrante-get.component.css']
})
export class PalestranteGetComponent implements OnInit {

  palestrantes: Palestrante[];

  constructor(private palestranteService: PalestranteService) { }

  ngOnInit() {
    this.palestranteService.getPalestrantes().subscribe((data: Palestrante[]) => {
      this.palestrantes = data;
    });
  }

}
