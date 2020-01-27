import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Link } from './link.model';
 
@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent implements OnInit {
  // Este componente recibirá un input desde app-link en app.component.html
  @Input() link: Link;

  // Lo que hace este decorador agregarle al componente en una clase
  @HostBinding('attr.class') cssClass = 'row';
  
  constructor() {
    
   }

  ngOnInit() {
  }

}
