import { Component } from '@angular/core';
import { DataService } from '../api/data.service';
import { IProducts } from '../iproducts';
import { ActivatedRoute } from '@angular/router';
import {faStar} from'@fortawesome/free-solid-svg-icons';
import {faStarHalfStroke} from'@fortawesome/free-solid-svg-icons';
import {faCartShopping} from'@fortawesome/free-solid-svg-icons';
import {faBagShopping} from'@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-category-products',
  templateUrl: './category-products.component.html',
  styleUrls: ['./category-products.component.css']
})
export class CategoryProductsComponent {
  faStar = faStar;
  faStarHalfStroke = faStarHalfStroke;
  faCartShopping = faCartShopping;
  faBagShopping = faBagShopping;
  listSanPham:IProducts[]=[]; 
  tenLoai:string=""; 
  idLoai:number=0;  
  pageNum:number=1;
  pageSize:number=4;
  total: number = 0; 
  constructor( 
     private d: DataService, 
     private route:ActivatedRoute
  ) { }
  ngOnInit(): void {
    this.idLoai = Number( this.route.snapshot.params['id'] );
    this.d.getTenLoaiSanPham(this.idLoai).subscribe ( 
      loai =>  { this.tenLoai= loai[0].tenLoai; }    
    );
    this.d.getSanPhamTheoLoai(this.idLoai, this.pageSize,this.pageNum).subscribe ( 
      res => {
        this.listSanPham  = res.body ;
        this.total = Number(res.headers.get('X-Total-Count'));
      } 
    );
  }
  chuyenDenTrang( p: number){
    this.pageNum = p;
     this.d.getSanPhamTheoLoai(this.idLoai, this.pageSize, this.pageNum).subscribe ( 
      res => {
        this.listSanPham  = res.body ;
        this.total = Number(res.headers.get('X-Total-Count'));
      }
     );
  }


}
