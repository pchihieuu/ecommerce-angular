import { Component, OnInit  } from '@angular/core';
import { Iblog } from '../iblog';
import { DataService } from '../api/data.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  constructor(private b:DataService) { }
  listBlog:Iblog[] = [];
  ngOnInit(): void {
    this.b.getBlog().subscribe(b => this.listBlog=b);
  }

}
