import { Component } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.sass'],
})
export class PrincipalComponent {
  titulo: string = 'The Bright Future of Web 3.0?';
  parrafo: string =
    'We dive into the next evolution of the web that' +
    'claims to put the power of the platforms back into the hands of the people.' +
    'But is it really fulfilling its promise?';
  boton: string = 'Read more';
}
