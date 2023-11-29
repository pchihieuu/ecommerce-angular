import { Component } from '@angular/core';
import { IProducts } from '../iproducts';
import { DataService } from '../api/data.service';
import { Input } from '@angular/core';
import { SimpleChanges} from '@angular/core';
import {faStar} from'@fortawesome/free-solid-svg-icons';
import {faStarHalfStroke} from'@fortawesome/free-solid-svg-icons';
import {faCartShopping} from'@fortawesome/free-solid-svg-icons';
import {faBagShopping} from'@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-recommend-product',
  templateUrl: './recommend-product.component.html',
  styleUrls: ['./recommend-product.component.css']
})
export class RecommendProductComponent {
  faStar = faStar;
  faStarHalfStroke = faStarHalfStroke;
  faCartShopping = faCartShopping;
  faBagShopping = faBagShopping;
  @Input() idLoai:number =0; 
  @Input() soSP:number =0;
  listSanPham:IProducts[]=[];
  constructor( private d:DataService) {}
  ngOnInit(): void { };
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);  
    this.d.getSanPhamLienQuan(this.idLoai, this.soSP).subscribe(
      data => { this.listSanPham= data; console.log(data); }
    );
  }

}
