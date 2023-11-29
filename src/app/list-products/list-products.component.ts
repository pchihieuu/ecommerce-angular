import { Component, OnInit } from '@angular/core';
import { DataService } from '../api/data.service';
import {faStar} from'@fortawesome/free-solid-svg-icons';
import {faStarHalfStroke} from'@fortawesome/free-solid-svg-icons';
import {faCartShopping} from'@fortawesome/free-solid-svg-icons';
import {faBagShopping} from'@fortawesome/free-solid-svg-icons';
import { IProducts } from '../iproducts';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit{
  faStar = faStar;
  faStarHalfStroke = faStarHalfStroke;
  faCartShopping = faCartShopping;
  faBagShopping = faBagShopping;
  constructor(private d:DataService) { }
  listSanPham:IProducts[] = [];
  ngOnInit(): void {
    this.d.getProduct().subscribe(d => this.listSanPham= d);
  }
}
