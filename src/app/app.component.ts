import { Component } from '@angular/core';
import { Link } from './link/link.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public links: Link[];

  constructor(){
    this.links = [
      new Link('Angular', 'http://angular.io', 100),
      new Link('Google', 'http://google.com', 80),
      new Link('Wikipedia', 'http://wikipedia.org', 60)
    ]
  }

  // Factorizar esto con inyeccion de dependencias
  addLink(title: HTMLInputElement, link: HTMLInputElement){
    this.links.push(new Link(title.value, link.value));
    // Para limpiar el formulario
    title.value = link.value = '';

    // return @false para que no recargue la página
    return false;
  }

}
