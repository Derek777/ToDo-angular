import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { DataService} from '../data.service';
import { TimerService } from '../timer.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit, OnDestroy {

  private count: Number;
  private title;
  private deadline;
  private date;
  private timer;
  private tiktak;
  // private username;


  constructor(
    private dataService: DataService,
    private timerService: TimerService,
    // private route: ActivatedRoute
    ) {

    }

  ngOnInit() {

    this.dataService.projectsCount.subscribe(data => {
      this.count = data;
    });
    this.count = this.dataService.getCount(); // number of active projects (0 or number)

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
    // this.route.paramMap.subscribe(params => {
    //   console.log(params.get('project'));
    //   this.username = params.get('project');
    // });
    // this.countOfTimer();

    this.tiktak = setInterval(() => {
      // console.log(this.timer);
    //   console.log(this.date);
    // console.log(this.deadline);
    this.timer = Math.round((this.date + this.deadline - new Date().getTime()) / 1000);

    }, 250 );
    // console.log(this.date);
    // console.log(this.deadline);
    // console.log(new Date().getTime());
  }

  ngOnDestroy() {
    clearInterval(this.tiktak);
  }

  // countOfTimer() {
  //   this.timer = Math.round((this.date + this.deadline - new Date().getTime()) / 1000);
  // }


}
