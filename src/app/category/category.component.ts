import { Component } from '@angular/core';
import { DataService } from '../api/data.service';
import { ICategory } from '../icategory';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  constructor(private d:DataService) { }
  listLoaiSP:ICategory[] = [];
  ngOnInit(): void {
    this.d.getListLoaiSP().subscribe( d => this.listLoaiSP = d);
  }

}
