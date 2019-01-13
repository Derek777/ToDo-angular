import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService} from '../_services/data.service';
import { TimerService } from '../_services/timer.service';
import { ActivatedRoute } from '@angular/router';
import { SortEvent } from '../draggable/sortable-list.directive';

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
    if (this.project) {
      this.date = this.project.date;
      this.stages = this.project.newStage;
      this.deadline = this.project.projectTime * 60 * 60 * 1000;

      this.timerService.setTitle(this.title);
      this.timerService.setTimer(this.deadline);
      this.timerService.setDate(this.date);
    }
  }

  ngOnDestroy() {
    this.timerService.setTitle(null);
    this.timerService.setTimer(null);
    this.timerService.setDate(null);
  }

  addStage(newStage) {
    this.stages.push(newStage);
    this.data.updateProjectStages(this.title, this.stages);
    // window.location.reload();                                           //Костильний костиль!!!!! :(
  }

  sort(event: SortEvent) {
    const current = this.stages[event.currentIndex];
    const swapWith = this.stages[event.newIndex];
    // console.log(event);
    this.stages[event.newIndex] = current;
    this.stages[event.currentIndex] = swapWith;
    this.data.updateProjectStages(this.title, this.stages);
  }


  deleteStage(stage) {
    for (let i = 0; i < this.stages.length; i++) {
      if (stage === this.stages[i]) {
        this.stages.splice(i, 1);
        this.data.updateProjectStages(this.title, this.stages);
        return;
      }
    }
  }

}
