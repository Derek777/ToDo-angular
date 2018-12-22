import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent implements OnInit {

  constructor() { }

  @Input() project;

  @Output() deleteProject = new EventEmitter();

  delete(title) {
    this.deleteProject.emit(title);
  }

  ngOnInit() {
  }

}
