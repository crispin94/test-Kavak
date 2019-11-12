import { Component, OnInit } from '@angular/core';
import { Service } from '../app/servicios/service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AngularTest';
  posts: any = [];

  constructor(private service: Service) { }

  async ngOnInit() {
    this.posts = await this.service.getPosts().toPromise();
    console.log(this.posts);
  }
}
