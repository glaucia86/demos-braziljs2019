import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PalestranteService {

  // ==> usar a uri da api (Back-End)
  uri = 'http://localhost:8000/api';

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

    // ==> (POST - Url no Back-End): http://localhost:8000/api/palestrante
    this.http.post(`${this.uri}/palestrante`, palestrante)
      .subscribe(res => console.log('Feito'));
  }

  /**
   * Método responsável por selecionar todos os 'Palestrantes'
   */
  getPalestrantes() {
    // ==> (GET - Url no Back-End): http://localhost:8000/api/palestrantes
    return this
      .http
      .get(`${this.uri}/palestrantes`);
  }

  /**
   * Método responsável por atualizar o 'Palestrante' pelo 'Id':
   */
  editPalestrante(id) {
    // ==> (GET - Url no Back-End): (GET): localhost:8000/api/palestrante/:id
    return this
      .http
      .get(`${this.uri}/palestrante/${id}`);
  }

  atualizarPalestrante(nomePalestrante, tituloPalestra, id) {
    const palestrante = {
      nomePalestrante,
      tituloPalestra
    };

    // ==> (PUT - Url no Back-End): (GET): localhost:8000/api/palestrante/:id
    this
      .http
      .post(`${this.uri}/palestrante/${id}`, palestrante)
      .subscribe(res => console.log('Done!'));
  }

  /**
   * Método responsável por excluir um 'Palestrante' pelo 'Id':
   */
  excluirPalestrante(id) {
    // ==> (DELETE - Url no Back-End): (GET): localhost:8000/api/palestrante/:id
    return this
      .http
      .get(`${this.uri}/palestrante/${id}`);
  }
}
