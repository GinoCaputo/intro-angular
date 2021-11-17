import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent {
  frutas = ['Guaya', 'Pera', 'Melon', 'Fresa -Frutilla', 'Durazno'];
  numero = 500;
  persona = { name: 'Gregor', apellido: 'Lopez' };
  miclase = 'clase';

  constructor() {}

  obtenerFruta() {}
}
