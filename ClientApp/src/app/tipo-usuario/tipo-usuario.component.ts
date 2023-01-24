import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './tipo-usuario.component.html'
})

export class TipoUsuarioComponent {
  public tipos: TipoUsuario[] = [];

  //https://localhost:7199
  constructor(http: HttpClient, @Inject('API_URL') baseUrl: string) {
    http.get<TipoUsuario[]>(baseUrl + 'TipoUsuarios').subscribe(result => {
      this.tipos = result;
    }, error => console.error(error));
  }
}


interface TipoUsuario {
  id: number;
  tipo: string;
}
