import { Component } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.sass'],
})
export class ListaComponent {
  titulo: string = 'New';
  titulo1: string = 'Hydrogen VS Electric Cars';
  texto1: string = 'Will hydrogen-fueled cars ever catch up to EVs?';
  titulo2: string = 'The Downsides of AI Artistry';
  texto2: string =
    'What are the possible adverse effects of on-demand AI image generation?';
  titulo3: string = 'Is VC Funding Drying Up?';
  texto3: string =
    'Private funding by VC firms is down 50% YOY. We take a look at what that means.';
}
