import { Component } from '@angular/core';
import { DataService } from '../api/data.service';
import { IProducts } from '../iproducts';
import {faStar} from'@fortawesome/free-solid-svg-icons';
import {faStarHalfStroke} from'@fortawesome/free-solid-svg-icons';
import {faCartShopping} from'@fortawesome/free-solid-svg-icons';
import {faBagShopping} from'@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-hotproducts',
  templateUrl: './hotproducts.component.html',
  styleUrls: ['./hotproducts.component.css']
})
export class HotproductsComponent {
  faStar = faStar;
  faStarHalfStroke = faStarHalfStroke;
  faCartShopping = faCartShopping;
  faBagShopping = faBagShopping;
  
  
  constructor(private d:DataService) { }
  listSanPham:IProducts[] = [];
  ngOnInit(): void {
    this.d.getLaptopBanChay().subscribe(d => this.listSanPham= d);
  }

}
