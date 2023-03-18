import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass'],
})
export class MenuComponent {
  activar = false;
  menu: string[] = ['Home', 'New', 'Popular', 'Trending', 'Categories'];
  mostrar(): void {
    this.activar = !this.activar;
  }
}
