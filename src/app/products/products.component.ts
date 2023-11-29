import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  listSP:any;
  constructor( private h: HttpClient ){
    this.h.get("http://localhost:3000/sanpham",
            {observe: 'response'}
 ).subscribe(
      res => { 
        console.log("ok=", res.ok);
        console.log("body=", res.body);
        console.log("res=", res);
        console.log("Content-Type=", res.headers.get('Content-Type'));
        this.listSP= res.body; 
      }
 )
  }

}
