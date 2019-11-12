import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tienda',
  template: `
  <h4>Nuestra tienda esta trabajando</h4>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
      A labore nulla delectus molestias fugit possimus nam tenetur
       incidunt, est culpa maiores nihil ipsum eaque deleniti dolor adipisci, qui cum accusantium.
    </p>
    <a routerLink="/inicio" class="btn btn-success">Inicia sesion</a>
  `,
  styles: []
})
export class TiendaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
