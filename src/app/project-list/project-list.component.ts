import { Component, OnInit } from '@angular/core';
import { DataService} from '../data.service';



@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit { 

  private projects;

  constructor(private data: DataService ) { }

  ngOnInit() {
    this.projects = this.data.getAllTitles();
    console.log(this.projects);
  }   

}
