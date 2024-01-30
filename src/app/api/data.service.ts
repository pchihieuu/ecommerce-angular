import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProducts } from '../iproducts';
import { ICategory } from '../icategory';
import { map } from 'rxjs';
import { Iblog } from '../iblog';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private h:HttpClient) { }
  getProduct() {
    var url = `http://localhost:3000/sanpham`
    return this.h.get<IProducts[]>( url );
  }
  laySP(id:number=0){
    return this.h.get(`http://localhost:3000/sanpham/${id}`);
  }
  getLaptopBanChay(){
    var url='http://localhost:3000/sanpham?idLoai=2&_sort=solanxem&_order=desc&_limit=8';
    return this.h.get<IProducts[]>( url );
  }
  getDienThoaiMoi(){
    var url='http://localhost:3000/sanpham?idLoai=1&_sort=ngay&order=desc&_limit=8';
    return this.h.get<IProducts[]>( url );
  }
  getListLoaiSP() {
    var url = `http://localhost:3000/loaisp`;
    return this.h.get<ICategory[]>(url);
  }
  getSanPhamTheoLoai(idLoai:Number=0, pageSize:number=1, pageNum:number=1) { 
    var url = `http://localhost:3000/sanpham?idLoai=${idLoai}&_sort=ngay&order=desc`;
    url+= `&_page=${pageNum}&_limit=${pageSize}`;
    return this.h.get<any>(url , {observe: 'response'} );
  }
  getTenLoaiSanPham(idLoai:Number=0){
    var url = `http://localhost:3000/loaisp?id=${idLoai}`;
    return this.h.get<ICategory[]>(url);
  }
  getSanPhamChiTiet(idSP:Number=0){
    var url = `http://localhost:3000/sanpham?id=${idSP}`;
    return this.h.get<IProducts[]>(url);
  }
  getSanPhamLienQuan(idLoai:number=0, soSP:number=0){
    var url = `http://localhost:3000/sanpham?idLoai=${idLoai}&_limit=${soSP}`;
    return this.h.get<IProducts[]>(url);
  }
  getBlog() {
    var url = `http://localhost:3000/blog`
    return this.h.get<Iblog[]>( url );
  }
 
}
