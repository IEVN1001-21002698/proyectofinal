import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import AbcComponent from "../admin/abc/abc.component";


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, AbcComponent,RouterOutlet],
  templateUrl: './navbar.component.html',
 styles: ``
})
export class NavbarComponent {

}
