import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PalestranteService {

  uri = '/palestrante';

  constructor(private http: HttpClient) { }

  /**
   * Método responsável por criar um novo 'Palestrante'
   */
  adicionarPalestrante(nomePalestrante, tituloPalestra) {
    const palestrante = {
      nomePalestrante,
      tituloPalestra
    };
    console.log(palestrante);

    this.http.post(`${this.uri}/add`, palestrante)
      .subscribe(res => console.log('Feito'));
  }
}
