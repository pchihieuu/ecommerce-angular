import { Component } from '@angular/core';
import {faStar} from'@fortawesome/free-solid-svg-icons';
import {faStarHalfStroke} from'@fortawesome/free-solid-svg-icons';
import {faCartShopping} from'@fortawesome/free-solid-svg-icons';
import {faBagShopping} from'@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  faStar = faStar;
  faStarHalfStroke = faStarHalfStroke;
  faCartShopping = faCartShopping;
  faBagShopping = faBagShopping;

}
