import { Component, OnInit } from '@angular/core';
import { DataService} from '../data.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  items = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.items = this.dataService.getData();
  }

}
