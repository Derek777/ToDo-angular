import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService} from '../_services/data.service';
import { TimerService } from '../_services/timer.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit, OnDestroy {

  private count: Number;
  public title;
  private deadline;
  private date;
  private timer;
  private tiktak;



  constructor(
    private dataService: DataService,
    private timerService: TimerService,
    ) {}

  ngOnInit() {

    this.dataService.projectsCount.subscribe(data => {
      this.count = data;
    });
    this.count = this.dataService.getCount();

    this.timerService.projectTitle.subscribe(data => {
      this.title = data;
    });
    this.title = this.timerService.getTitle();

    this.timerService.projectTimer.subscribe(data => {
      this.deadline = data;
    });
    this.deadline = this.timerService.getTimer();

    this.timerService.projectDate.subscribe(data => {
      this.date = data;
    });
    this.date = this.timerService.getDate_();

    this.tiktak = setInterval(() => {
      this.timer = Math.round((this.date + this.deadline - new Date().getTime()) / 1000);
    }, 250 );
  }

  ngOnDestroy() {
    clearInterval(this.tiktak);
  }

}
