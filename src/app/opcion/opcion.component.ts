import { Component } from '@angular/core';

@Component({
  selector: 'app-opcion',
  templateUrl: './opcion.component.html',
  styleUrls: ['./opcion.component.sass'],
})
export class OpcionComponent {
  titulo1: string = '01';
  texto1: string = 'Reviving Retro PCs';
  subtexto1: string = 'What happens when old PCs are given modern upgrades?';
  titulo2: string = '02';
  texto2: string = 'Top 10 Laptops of 2022';
  subtexto2: string = 'Our best picks for various needs and budgets.';
  titulo3: string = '03';
  texto3: string = 'The Growth of Gaming';
  subtexto3: string = 'How the pandemic has sparked fresh opportunities.';
}
