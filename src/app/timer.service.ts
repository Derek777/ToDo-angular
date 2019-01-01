import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {Router, ActivatedRoute, NavigationEnd} from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class TimerService {

  private title: string;
  private timer = null;
  private date = null;

  private projectsTitles = new BehaviorSubject<any>({} as any); // count in Header
  public projectTitle = this.projectsTitles.asObservable();

  private projectsTimers = new BehaviorSubject<any>({} as any); // count in Header
  public projectTimer = this.projectsTimers.asObservable();

  private projectsDates = new BehaviorSubject<any>({} as any); // count in Header
  public projectDate = this.projectsDates.asObservable();

  constructor() {}

  getTitle() {
    this.projectsTitles.next(this.title);
    return this.title;
  }

  setTitle(name) {
    this.title = name;
    this.getTitle();
  }

  getTimer() {
    this.projectsTimers.next(this.timer);
    return this.timer;
  }

  setTimer(count) {
    this.timer = count;
    this.getTimer();
  }

  getDate_() {
    this.projectsDates.next(this.date);
    return this.date;
  }

  setDate(count) {
    this.date = count;
    this.getDate_();
  }
}
