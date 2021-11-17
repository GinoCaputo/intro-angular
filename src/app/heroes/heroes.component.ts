import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent {
  frutas: Array<string | number> = [
    'Guaya',
    'Pera',
    'Melon',
    'Fresa -Frutilla',
    'Durazno',
    500,
  ];
  numero: number | string = 500;
  persona: Persona = { nombre: 'Gregor', apellido: 'Lopez', vip: true };
  clase: string = 'd-block';
  cualquiera: any = 50;
  nulo: null = null;
  indefinido: undefined;
  value: string = 'Gregor';

  constructor() {
    this.numero = '500';
    this.cualquiera = '50';
    this.cualquiera = true;
    this.cualquiera = {};
  }

  obtenerNombre() {
    return this.persona.vip;
  }

  onClick() {
    // this.clase = 'd-none';
    console.log(this.value);
  }
}

interface Persona extends PersonaVip {
  nombre: string;
  apellido: string;
}

interface PersonaVip {
  vip: true;
}
