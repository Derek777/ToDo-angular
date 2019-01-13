import { Component, OnInit, Input, Output, OnDestroy } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { ModalService } from '../_services/modal.service';



@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent implements OnInit, OnDestroy {

  constructor(private modalService: ModalService) { }

  private timer;
  private tiktak;
  private deadline;

  @Input() project;

  @Output() deleteProject = new EventEmitter();

  delete(title) {
    this.modalService.open('custom-modal-1');
    this.deleteProject.emit(title);
  }

  ngOnInit() {
    this.deadline = this.project.projectTime * 60 * 60 * 1000;
    this.countOfTimer();

    this.tiktak = setInterval(() => {
      if (this.timer > 0) {
        this.countOfTimer();
      } else {
        this.timer = 0;
      }
    }, 250 );
  }

  ngOnDestroy() {
    clearInterval(this.tiktak);
  }

  countOfTimer() {
    this.timer = Math.round((this.project.date + this.deadline - new Date().getTime()) / 1000);
  }

}
