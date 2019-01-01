import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService} from '../data.service';
import { TimerService } from '../timer.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit, OnDestroy {

  private project;
  private title;
  private date;
  private deadline;
  private username;


  constructor(
    private data: DataService,
    private route: ActivatedRoute,
    private timerService: TimerService
  ) { }

  ngOnInit() {
    this.title = this.route.snapshot.params['project'];
    this.project = this.data.getTitle(this.title);
    this.deadline = this.project.projectTime;
    this.date = this.project.date;

    this.deadline = this.project.projectTime * 60 * 60 * 1000;
    this.date = this.project.date;

    // this.route.paramMap.subscribe(params => {
    //   // console.log(params.get('project'));
    //   this.username = params.get('project');
    // });
    this.timerService.setTitle(this.title);
    this.timerService.setTimer(this.deadline);
    this.timerService.setDate(this.date);
  }

  ngOnDestroy() {
    this.timerService.setTitle(null);
    this.timerService.setTimer(null);
    this.timerService.setDate(null);
  }



}
