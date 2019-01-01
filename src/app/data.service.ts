import { Injectable, OnInit } from '@angular/core';
import {LocalStorageService} from './local-storage.service';
import { projection } from '@angular/core/src/render3/instructions';
import { Observable, Observer, BehaviorSubject } from 'rxjs';
import { Subject } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService implements OnInit {
  private name: String = 'My_';

  private projectsCountObject = new BehaviorSubject<any>({} as any); // count in Header
  public projectsCount = this.projectsCountObject.asObservable();

  private projectTitlesObject = new BehaviorSubject<any>({} as any); // Titlea array in project-list
  public projectTitles = this.projectTitlesObject.asObservable();




  constructor(private DB: LocalStorageService) { }

  ngOnInit() {

  }

  getCount() {
    // console.log(this.DB.lenght());
     return this.DB.lenght(this.name);
  }

  // onChange (callback) {
  //   this.callback = callback;
  //   console.log(this.callback );
  //   console.log(callback );
  // }

  getTitle (title: string) {
    // let y = this.name
    // console.log(title);
    return this.DB.get(this.name + title);
  }

  getAllProjects() {
    return this.DB.getAllProjects(this.name);
  }

  // show(item){
  //   console.log(item);
  // }

  basicStages(): string[] {
    return new Array(
      'start of the project',
      'work on the project',
      'end of the project'
    );
  }

  createProject(newProject, stages) {
    newProject.newStage = stages.map(i => i.trim());
    newProject.projectTitle = newProject.projectTitle.trim();
    newProject.date = new Date().getTime();
    newProject.timer = null;
    this.DB.set(this.name + newProject.projectTitle, newProject);
    this.projectsCountObject.next(this.getCount());
  }

  deleteProject(projectTitle: string) {
    this.DB.deleteProject(this.name + projectTitle);
    this.projectTitlesObject.next(this.getAllProjects());
    this.projectsCountObject.next(this.getCount());
  }





  add() {}//
  delete() {}//
  get() {}//
  edit() {}//

  // private data = [
  //   { name: 'Apple iPhone 7', price: 56000},
  //   { name: 'zago Elite x3', price: 56000},
  //   { name: 'Alcatel Idol S4', price: 25000}
  // ];
  // getData() {
  //   return this.data;
  // }



  // someMethod() {
  //   const myData = {foo: 'bar'};
  //   this.LS.set('SOME_KEY', myData);
  // }

  // someOtherMethod() {
  //   const myData = this.LS.get('SOME_KEY');
  // }
}

