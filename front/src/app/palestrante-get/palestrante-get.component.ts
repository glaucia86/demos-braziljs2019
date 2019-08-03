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
    this.palestranteService
      .getPalestrantes()
      .subscribe((data: Palestrante[]) => {
        this.palestrantes = data;
    });
  }

  /**
   * Método responsável por excluir um 'Palestrante' pelo 'Id'
   */
  excluirPalestrante(id) {
    this.palestranteService.excluirPalestrante(id).subscribe(res => {
      this.palestrantes.splice(id, 1);
    });
  }

}
