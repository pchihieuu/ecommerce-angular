import { Component } from '@angular/core';
import { DataService } from '../api/data.service';
import { IProducts } from '../iproducts';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  constructor( 
    private d:DataService,  
    private route:ActivatedRoute 
  ) { }
 spChiTiet:IProducts={
   id: 0, tensp: "", giasp: 0,
   solanxem: 0, hinh: "",
   mota: "", hot: 0, ngay: "", idLoai: 0,
 }; 
 idSP:number=0;  
 idLoai:number=0;
 tenLoai:string="";
 ngOnInit(): void {
   this.idSP = Number(this.route.snapshot.params['id']);    
   this.d.getSanPhamChiTiet(this.idSP).subscribe ( 
     res => { 
       this.spChiTiet  = res[0];
       this.idLoai = this.spChiTiet.idLoai;
       this.d.getTenLoaiSanPham(this.idLoai).subscribe(
         d => this.tenLoai = d[0]['tenLoai']
       );
     }//res
   );
 }
  
 


}
