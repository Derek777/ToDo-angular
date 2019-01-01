import { Component, OnInit, Input, Output, OnDestroy } from '@angular/core';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent implements OnInit, OnDestroy {

  constructor() { }

  private timer;
  private tiktak;
  // private currentDate;
  private deadline;

  @Input() project;

  @Output() deleteProject = new EventEmitter();

  delete(title) {
    // clearInterval(this.startTimer);
    this.deleteProject.emit(title);
  }

  ngOnInit() {
    // this.currentDate = new Date().getTime();
    this.deadline = this.project.projectTime * 60 * 60 * 1000;
    // this.timer = this.project.date + this.deadline - new Date().getTime();
    this.countOfTimer();

    // this.startTimer();
    this.tiktak = setInterval(() => {
      // console.log(this.timer);
      if (this.timer > 0) {
        this.countOfTimer();
        // console.log(this.timer);
        // this.timer = (this.project.date + this.deadline - new Date().getTime()) / 1000;
      } else {
        this.timer = 0;
      }
    }, 250 );
  }

  ngOnDestroy() {
    // alert('kill');
    clearInterval(this.tiktak);
  }

  countOfTimer() {
    this.timer = Math.round((this.project.date + this.deadline - new Date().getTime()) / 1000);
  }

}
