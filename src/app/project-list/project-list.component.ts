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
    this.data.projectTitles.subscribe(data => {
      this.projects = data;
    });
    this.projects = this.data.getAllProjects();
  }

  // deleleProject(projectTitle: string){
  //   this.data.deleteProject(projectTitle);
  // }
  deleteProject(title) {
    this.projects.forEach((element, index, arr) =>  {
      if (element.projectTitle === title) {
        arr.splice(index, 1);
        console.log(this);
        this.data.deleteProject(title);
      }
    });
  }

  sortProjects(a, b) {
    if ( a.projectPriority > b.projectPriority) {
      return 1;
     }
    if ( a.projectPriority < b.projectPriority) {
      return -1;
     }
  }

 }
