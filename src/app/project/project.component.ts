import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService} from '../data.service';
import { TimerService } from '../timer.service';
import { ActivatedRoute } from '@angular/router';
import { SortEvent } from '../sortable-list.directive';

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
  private stages;

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
    this.stages = this.project.newStage;
    this.deadline = this.project.projectTime * 60 * 60 * 1000;
    this.timerService.setTitle(this.title);
    this.timerService.setTimer(this.deadline);
    this.timerService.setDate(this.date);
  }

  ngOnDestroy() {
    this.timerService.setTitle(null);
    this.timerService.setTimer(null);
    this.timerService.setDate(null);
  }

  sort(event: SortEvent) {
    const current = this.stages[event.currentIndex];
    const swapWith = this.stages[event.newIndex];
    this.stages[event.newIndex] = current;
    this.stages[event.currentIndex] = swapWith;
    this.data.updateProjectStages(this.title, this.project.newStage);
  }

}
